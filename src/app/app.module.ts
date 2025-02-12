import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
// import { FilterMeditationPipe } from "./service/filter-meditation.pipe";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        AppComponent
        // FilterMeditationPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
