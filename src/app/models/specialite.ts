import { ISpecialite } from "./ISpecialite";

export class Specialite {
    constructor (
        public _libelle: string,
        public _idSpec: number
    ){}

    //GETTERS
    public get libelle(){
        return this._libelle;
    }
    public get idSpec(){
        return this._idSpec;
    }

    //SETTERS
    public set libelle(libelle: string){
        this._libelle = libelle;
    }
    public set idSpec(idSpec: number){
        this._idSpec = idSpec;
    }
}
