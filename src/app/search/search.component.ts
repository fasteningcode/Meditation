import { MeditationService } from './../service/meditation.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    constructor(private meditationService: MeditationService) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    addMeditation() {
        console.log('====================================');
        console.log("Meditation Clicked");
        console.log('====================================');
        this.meditationService.create();
    }
}
