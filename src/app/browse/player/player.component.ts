import { StorageService } from "./../../service/storage.service";
import { MeditationModel } from "./../../models/meditation.model";
import { ChapterModel } from "../../models/chapter.model";
import { MeditationService } from "./../../service/meditation.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})

export class PlayerComponent implements OnInit {

    chapter: ChapterModel;
    meditation: MeditationModel;
    constructor(private meditationService: MeditationService, private storageService: StorageService) { }

    ngOnInit(): void {
        this.meditationService.browseChapterObs.subscribe((data) => {
            this.chapter = data;
        });

        this.meditationService.browseMeditationObs.subscribe((data) => {
            this.meditation = data;
        });
    }
    async onDownload() {
        console.log("on Download");
        this.storageService.chapterLocalRefObs.subscribe((data) => {
            console.log(data._path);
        });

    }

}
