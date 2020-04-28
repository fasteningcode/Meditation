import { MeditationModel } from "./../models/meditation.model";
import { ChapterModel } from "../models/chapter.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { take } from "rxjs/operators";
const firebase = require("nativescript-plugin-firebase/app");

@Injectable({
    providedIn: "root"
})
export class MeditationService {

    // tslint:disable-next-line: no-shadowed-variable
    private subject: BehaviorSubject<Array<MeditationModel>> = new BehaviorSubject<Array<MeditationModel>>([]);
    // tslint:disable-next-line: member-ordering
    array$: Observable<Array<MeditationModel>> = this.subject.asObservable();

    constructor() {
        this.fetchFromDb();
    }

    fetchFromDb() {
        this.subject.next([]);
        const meditationsCollection = firebase.firestore().collection("meditations");
        meditationsCollection.get({ source: "server" }).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               // console.log(doc.data());

                // tslint:disable-next-line: max-line-length
                this.addMeditationsToObservableArray(new MeditationModel(doc.id, doc.data().name, doc.data().backgroundColor, doc.data().fontColor, doc.data().chapter));
            });
        });
    }

    // BROWSE Single Meditation that can be shared in BROWSE
    // tslint:disable-next-line: member-ordering
    private browseMeditationSub: BehaviorSubject<MeditationModel> = new BehaviorSubject<MeditationModel>(null);

    // BROWSE Single Meditation that can be shared in BROWSE
    // tslint:disable-next-line: member-ordering
    private browseChapterSub: BehaviorSubject<ChapterModel> = new BehaviorSubject<ChapterModel>(null);
    // tslint:disable-next-line: member-ordering
    browseMeditationObs: Observable<MeditationModel> = this.browseMeditationSub.asObservable();
    // tslint:disable-next-line: member-ordering
    browseChapterObs: Observable<ChapterModel> = this.browseChapterSub.asObservable();
    // tslint:disable-next-line: member-ordering
    setBrowseChapter(chapter: ChapterModel) {
        this.browseChapterSub.next(chapter);
    }  // tslint:disable-next-line: member-ordering
    setBrowseMeditation(meditation: MeditationModel) {
        this.browseMeditationSub.next(meditation);
    }

    private addMeditationsToObservableArray(meditation: MeditationModel) {
        this.array$.pipe(take(1)).subscribe((val) => {
            const newArr = [...val, meditation];
            this.subject.next(newArr);
        });
    }

}
   // create() {
    //     const meditationsCollection = firebase.firestore().collection("meditations");
    //     const meditationArray: Array<MeditationModel> = [
    //         // tslint:disable-next-line: max-line-length
    //         {
    //             id: "", name: "Ancient1", backgroundColor: "#D94E29", fontColor: "#ffffff", chapter: [
    //                 { id: "1", name: "Being Aware", playUri: "" }, { id: "2", name: "Getting Control", playUri: "" }]
    //         },
    //         {
    //             id: "", name: "Ancient2", backgroundColor: "#252EDF", fontColor: "#ffffff", chapter: [
    //                 { id: "1", name: "Being Aware", playUri: "" }, { id: "2", name: "Getting Control", playUri: "" }]
    //         }

    //     ];
    //     meditationArray.forEach((meditation) => {
    //         meditationsCollection.add({
    //             name: meditation.name,
    //             backgroundColor: meditation.backgroundColor,
    //             fontColor: meditation.fontColor,
    //             chapter: meditation.chapter
    //         });
    //     });
    // }
