import { ChapterService } from "./../../service/chapter.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular";

import { MeditationModel } from "./../../models/meditation.model";
import { MeditationService } from "./../../service/meditation.service";

@Component({
    selector: "ns-details",
    templateUrl: "./details.component.html"
})
export class DetailsComponent implements OnInit {

    meditation: MeditationModel;
    constructor(private chapterService: ChapterService,
                private router: RouterExtensions,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.chapterService.browseMeditationObs.subscribe((data) => {
            this.meditation = data;
        });
    }

    onTapMeditation(chapter) {
        // console.log(chapter);
        this.chapterService.setBrowseChapter(chapter);
        this.router.navigate(["../playerBrowse"], { relativeTo: this.activatedRoute });
    }

}
