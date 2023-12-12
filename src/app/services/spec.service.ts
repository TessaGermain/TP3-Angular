import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecService {

  specialite: Specialite[] = [
    new Specialite("NSI", 1),
    new Specialite("Mathématiques", 2),
    new Specialite("Anglais", 3),
    new Specialite("Français", 4),
    new Specialite("Dodo", 5)
  ]

  constructor() { }

  public addSpecialite(specialite: Specialite){
    this.specialite.push(specialite);
  }
}
