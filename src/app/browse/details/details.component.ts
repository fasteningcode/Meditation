import { MeditationModel } from "./../../models/meditation.model";
import { MeditationService } from "./../../service/meditation.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {

    meditation: MeditationModel;
    constructor(private meditationService: MeditationService) { }

    ngOnInit(): void {
        this.meditationService.browseMeditationObservable.subscribe((data) => {
            this.meditation = data;
        });
    }

}
