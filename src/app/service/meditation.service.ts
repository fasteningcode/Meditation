import { MeditationModel } from "./../models/meditation.model";
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
        meditationsCollection.get({ source: "server" }).then((querySnapshot: Array<any>) => {
            querySnapshot.forEach((doc) => {
               // console.log(doc.data());

                // tslint:disable-next-line: max-line-length
                this.addMeditationsToObservableArray(new MeditationModel(doc.id, doc.data().name, doc.data().backgroundColor, doc.data().fontColor, doc.data().chapter, doc.data().category));
            });
        });
    }

    private addMeditationsToObservableArray(meditation: MeditationModel) {
        this.array$.pipe(take(1)).subscribe((val) => {
            const newArr = [...val, meditation];
            this.subject.next(newArr);
        });
    }
}
