import { ChapterService } from "./../service/chapter.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { MeditationService } from "./../service/meditation.service";
import { MeditationModel } from "./../models/meditation.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
// import { FilterMeditationPipe  } from "../service/filter-meditation.pipe";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse.component.scss"]
})
export class BrowseComponent implements OnInit {
    meditations$: Array<MeditationModel>;
    meditationSub$: any;
    meditationCategories: Array<string> = ["All", "Mind Clarity", "Relax", "Sleep", "Anxiety", "Personal Growth"];
    filterArgs = "All";

    constructor(private meditationService: MeditationService,
                private chapterService: ChapterService,
                private router: RouterExtensions,
                private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // this.page.actionBarHidden = true;
        this.meditationSub$ = this.meditationService.array$.subscribe((meditation) => {
            this.meditations$ = meditation;
            // console.log(meditation);
        });
    }

    // ngOnDestroy(): void {
    //     this.meditationSub$.Unsubscribe();
    // }
    onTapCategory(item: string) {
        // console.log(item);
        this.filterArgs = item;

    }

    onTapMeditation(meditation: MeditationModel): void {
        // console.log(meditation);
        this.chapterService.setBrowseMeditation(meditation);
        this.router.navigate(["../details"], { relativeTo: this.activatedRoute });
    }
}
