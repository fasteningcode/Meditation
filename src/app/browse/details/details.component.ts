import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular";

import { MeditationModel } from "./../../models/meditation.model";
import { MeditationService } from "./../../service/meditation.service";

@Component({
    selector: "ns-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {

    meditation: MeditationModel;
    constructor(private meditationService: MeditationService,
                private router: RouterExtensions,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.meditationService.browseMeditationObs.subscribe((data) => {
            this.meditation = data;
        });
    }

    onTapMeditation(chapter) {
        console.log(chapter);
        this.meditationService.setBrowseChapter(chapter);
        this.router.navigate(["../playerBrowse"], {relativeTo : this.activatedRoute});
    }

}
