import { MeditationModel } from "./../models/meditation.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { take, filter, map, partition } from "rxjs/operators";
const firebase = require("nativescript-plugin-firebase/app");

@Injectable({
    providedIn: "root"
})
export class MeditationService {

    private subject: BehaviorSubject<Array<MeditationModel>> = new BehaviorSubject<Array<MeditationModel>>([]);
    // tslint:disable-next-line: member-ordering
    array$: Observable<Array<MeditationModel>> = this.subject.asObservable();

    constructor() {
        this.fetchfromDb();
    }

    create() {
        const meditationsCollection = firebase.firestore().collection("meditations");
        const meditationArray: Array<MeditationModel> = [
            { id: "", name: "Ancient1" },
            { id: "", name: "Ancient2" }
        ];

        // tslint:disable-next-line: no-shadowed-variable
        meditationArray.forEach((meditation) => {
            meditationsCollection.add({
                name: meditation.name
            }).then((document) => {
                console.log("====================================");
                console.log(document);
                console.log("====================================");
            });
        });

    }

    fetchfromDb() {
        this.subject.next([]);
        const meditationsCollection = firebase.firestore().collection("meditations");
        meditationsCollection.get({ source: "server" }).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.addMeditationsToObservableArray(new MeditationModel(doc.data().name, doc.id));
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
