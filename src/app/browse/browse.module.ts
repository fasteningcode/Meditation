import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";
import { DetailsComponent } from "./details/details.component";
import { SharedModule } from "./../shared/shared.module";
import { PlayerComponent } from "./player/player.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule,
        SharedModule
    ],
    declarations: [
        BrowseComponent,
        DetailsComponent,
        PlayerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
