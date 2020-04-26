import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    async ngOnInit() {
        try {
            await firebase.init({
                iOSEmulatorFlush: true,
                persist: false,
                // By default Firestore on iOS and Android persists data locally for offline usage (web doesn't by default, and the regular Firebase DB doesn't either on any platform).
            });
            console.log(">>>>> Firebase initialized");
        } catch (err) {
            console.log(">>>>> Firebase init error: " + err);
        }
    }
}
