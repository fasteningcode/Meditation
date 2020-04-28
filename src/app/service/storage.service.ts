import { FileRefModel } from "./../models/FileRef.model";
import { BehaviorSubject, Observable } from "rxjs";
import { ChapterModel } from "../models/chapter.model";
import { MeditationService } from "./meditation.service";
import { Injectable } from "@angular/core";
const firebase = require("nativescript-plugin-firebase/app");
import { getFile } from "tns-core-modules/http";
const storage = firebase.storage();

@Injectable({
  providedIn: "root"
})

export class StorageService {
    private chapterLocalRefSubject: BehaviorSubject<any> = new BehaviorSubject<FileRefModel>(null);
    // tslint:disable-next-line: member-ordering
    chapterLocalRefObs: Observable<any> = this.chapterLocalRefSubject.asObservable();

    constructor(private meditationService: MeditationService) {

        this.fetchChapterFromDb();
    }

    fetchChapterFromDb() {

        this.meditationService.browseChapterObs.subscribe((data) => {
            const pathReference = storage.ref().child(data.playUri);
            pathReference.getDownloadURL().then((url: string) => {
               // console.log(url);
                getFile(url).then((file) => {
                    // console.log("file");

                    // console.log(file);
                    this.chapterLocalRefSubject.next(file);
                }).catch((error) => {
                    console.log("====================================");
                    console.error(`Storage Serve Error Fetch Chapter from DB ${error}`);
                    console.log("====================================");
                });
            }).catch((error: any) => {
                console.log("====================================");
                console.error(`GetDownloadURL Error ${error}`);
                console.log("====================================");

            });
        });

    }
}
