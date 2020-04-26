import { ChapterModel, MeditationModel } from "./../../models/meditation.model";
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
    constructor(private meditationService: MeditationService) { }

    ngOnInit(): void {
        this.meditationService.browseChapterObs.subscribe((data) => {
            this.chapter = data;
        });

        this.meditationService.browseMeditationObs.subscribe((data) => {
            this.meditation = data;
        });
  }

}
