export class MeditationModel {
    id: string;
    name: string;
    backgroundColor: string;
    fontColor: string;
    chapter: Array<ChapterModel>;

    constructor(id: string, name: string, backgroundColor: string, fontColor: string, chapter: ChapterModel) {
        this.id = id;
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.fontColor = fontColor;
        this.chapter = new Array(chapter);
    }
}

// tslint:disable-next-line: max-classes-per-file
export class ChapterModel {
    id: string;
    name: string;
    playUri: string;
}
