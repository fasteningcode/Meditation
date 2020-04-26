import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarComponent } from "./action-bar/action-bar.component";

@NgModule({
    declarations: [ActionBarComponent],
    imports: [
        NativeScriptCommonModule
    ],
    exports: [ActionBarComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
