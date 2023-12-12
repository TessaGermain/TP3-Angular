import { IEtudiant } from "./IEtudiant";

export class Etudiant implements IEtudiant {
    constructor(
        public _nom: string,
        public _prenom: string,
        public _rue: string,
        public _cp: string,
        public _ville: string,
        public _courriel: string,
        public _genre: string,
        public _age: number,
        public _idCard: number
    ){}

    //GETTERS
    public get nom(){
        return this._nom;
    }
    public get prenom(){
        return this._prenom;
    }
    public get rue(){
        return this._rue;
    }
    public get cp(){
        return this._cp;
    }
    public get ville(){
        return this._ville;
    }
    public get courriel(){
        return this._courriel;
    }
    public get genre(){
        return this._genre;
    }
    public get age(){
        return this._age;
    }
    public get idCard(){
        return this._idCard;
    }

    //SETTERS
    public set nom(nom: string){
        this._nom = nom;
    }
    public set prenom(prenom: string){
        this._prenom = prenom;
    }
    public set rue(rue: string){
        this._rue = rue;
    }
    public set cp(cp: string){
        this._cp = cp;
    }
    public set ville(ville: string){
        this._ville = ville;
    }
    public set courriel(courriel: string){
        this._courriel = courriel;
    }
    public set genre(genre: string){
        this._genre = genre;
    }
    public set age(age: number){
        this._age = age;
    }
    public set idCard(idCard: number){
        this._idCard = idCard;
    }
}
