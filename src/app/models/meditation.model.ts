import { ChapterModel } from "./chapter.model";

export class MeditationModel {
    id: string;
    name: string;
    backgroundColor: string;
    fontColor: string;
    chapter: Array<ChapterModel>;

    constructor(id: string, name: string, backgroundColor: string, fontColor: string, chapter: Array<ChapterModel>) {
        this.id = id;
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.fontColor = fontColor;
        this.chapter = chapter;
    }
}
