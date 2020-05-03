import { MeditationModel } from "./../models/meditation.model";
import { ChapterModel } from "../models/chapter.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { take } from "rxjs/operators";
const firebase = require("nativescript-plugin-firebase/app");

@Injectable({
  providedIn: "root"
})
export class ChapterService {

    private browseMeditationSub: BehaviorSubject<MeditationModel> = new BehaviorSubject<MeditationModel>(null);
    private browseChapterSub: BehaviorSubject<ChapterModel> = new BehaviorSubject<ChapterModel>(null);

    // tslint:disable-next-line: member-ordering
    browseMeditationObs: Observable<MeditationModel> = this.browseMeditationSub.asObservable();
    // tslint:disable-next-line: member-ordering
    browseChapterObs: Observable<ChapterModel> = this.browseChapterSub.asObservable();

    constructor() { }
    setBrowseChapter(chapter: ChapterModel) {
        this.browseChapterSub.next(chapter);
    }
    setBrowseMeditation(meditation: MeditationModel) {
        this.browseMeditationSub.next(meditation);
    }

}
