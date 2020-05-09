import { Component, OnInit, Input } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

declare var android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html"
})
export class ActionBarComponent implements OnInit {

    @Input() title: string = null;
    @Input() showBackButton = true;
    @Input() hasMenu = true;
    @Input() backgroundColor: string; // = "#D2691E";
    constructor(private page: Page, private routerExtension: RouterExtensions) { }

    // tslint:disable-next-line: no-empty
    ngOnInit(): void {
    }
    onLoadedAction() {
        if (isAndroid) {
            const androidToolBar = this.page.actionBar.nativeView;
            const backButton = androidToolBar.getNavigationIcon();

            let color = "#737373";
            if (this.hasMenu) {
                color = "#737373";
            }
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor(color),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
            }
        }
    }

    get canGoBack() {
        return this.routerExtension.canGoBack() && this.showBackButton;
    }
    onGoBack() {
        this.routerExtension.backToPreviousPage();
    }

    get android() {
        return isAndroid;
    }
}
