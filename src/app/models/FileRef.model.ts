export class FileRefModel {
    _path: string;
    _name: string;
    _extension: string;

    constructor(_path: string, _name: string, _extension: string) {
        this._path = _path;
        this._name = _name;
        this._extension = _extension;
    }
}
