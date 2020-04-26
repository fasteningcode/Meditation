import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { MeditationService } from "./../service/meditation.service";
import { MeditationModel } from "./../models/meditation.model";
import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    meditations$: Array<MeditationModel>;

    constructor(private page: Page,
        private meditationService: MeditationService,
        private router: RouterExtensions,
        private activatedRoute: ActivatedRoute

    ) {

        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // this.page.actionBarHidden = true;
        this.meditationService.array$.subscribe((meditation) => {
            this.meditations$ = meditation;
            // console.log(meditation);
        });
    }

    onTapMeditation(meditation: MeditationModel): void {
        console.log(meditation);
        this.meditationService.setBrowseMeditation(meditation);
        this.router.navigate(["../details"], { relativeTo: this.activatedRoute });

    }
}
