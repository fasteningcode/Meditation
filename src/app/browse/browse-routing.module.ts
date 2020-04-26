import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BrowseComponent } from "./browse.component";
import { PlayerComponent } from "./player/player.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    { path: "default", component: BrowseComponent },
    { path: "details", component: DetailsComponent },
    { path: "playerBrowse", component: PlayerComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BrowseRoutingModule { }
