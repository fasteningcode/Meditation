export class MeditationModel {
    id: string;
    name: string;
    backgroundColor: string;
    fontColor: string;

    constructor(name: string, backgroundColor: string, fontColor: string, id?: string) {
        this.id = id;
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.fontColor = fontColor;
    }
}
