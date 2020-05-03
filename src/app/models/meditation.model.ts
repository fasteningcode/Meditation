import { ChapterModel } from "./chapter.model";

export class MeditationModel {
    id: string;
    name: string;
    backgroundColor: string;
    fontColor: string;
    chapter: Array<ChapterModel>;
    category: Array<string>;

    constructor(id: string, name: string, backgroundColor: string, fontColor: string,
                chapter: Array<ChapterModel>, category: Array<string>) {
        this.id = id;
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.fontColor = fontColor;
        this.chapter = chapter;
        this.category = category;
    }
}
