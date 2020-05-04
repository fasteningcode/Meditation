import { ChapterService } from "./../../service/chapter.service";
import { TNSPlayer } from "nativescript-audio";
import { StorageService } from "./../../service/storage.service";
import { MeditationModel } from "./../../models/meditation.model";
import { ChapterModel } from "../../models/chapter.model";
import { MeditationService } from "./../../service/meditation.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-player",
    templateUrl: "./player.component.html"
})
    // TODO - Show BG music for clock or soothing music.

export class PlayerComponent implements OnInit {

    chapter: ChapterModel;
    meditation: MeditationModel;
    private player: TNSPlayer;

    constructor(private meditationService: MeditationService,
                private chapterService: ChapterService,
                private storageService: StorageService) {
        this.player = new TNSPlayer();
        this.player.debug = true;
    }

    ngOnInit(): void {
        this.chapterService.browseChapterObs.subscribe((data) => {
            this.chapter = data;
        });

        this.chapterService.browseMeditationObs.subscribe((data) => {
            this.meditation = data;
        });

        this.storageService.chapterLocalRefObs.subscribe((data) => {
            console.log(data._path);
            this.player
                .initFromFile({
                    audioFile: data._path, // ~ = app directory
                    loop: false,
                    completeCallback: this._trackComplete.bind(this),
                    errorCallback: this._trackError.bind(this)
                })
                .then(() => {
                    this.player.getAudioTrackDuration().then((duration) => {
                        // iOS: duration is in seconds
                        // Android: duration is in milliseconds
                        console.log(`song duration:`, duration);
                    });
                });
        });

    }
    async onDownload() {
        console.log("on Download");
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        } else {
            this.player.play();
        }

    }

    private _trackComplete(args: any) {
        console.log("reference back to player:", args.player);
        // iOS only: flag indicating if completed succesfully
        console.log("whether song play completed successfully:", args.flag);
    }

    private _trackError(args: any) {
        console.log("reference back to player:", args.player);
        console.log("the error:", args.error);
        // Android only: extra detail on error
        console.log("extra info on the error:", args.extra);
    }

}
