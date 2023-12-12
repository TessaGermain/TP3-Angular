import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  etudiants: Etudiant[] = [
    new Etudiant(
      "François", 
      "Titouan", 
      "11 rue de lourmel", 
      "75015", 
      "Paris", 
      "titouan.françois2003@gmail.com", 
      "Homme", 
      20, 
      50602134
    ),
    new Etudiant(
      "Germain", 
      "Tessa", 
      "38 rue des cordeliers", 
      "77100", 
      "Meaux", 
      "tessa.germain2003@gmail.com", 
      "Femme", 
      20, 
      80456120
    ),
    new Etudiant(
      "Lorem", 
      "Ipsum", 
      "dzaonfa rue de fnepcn", 
      "75015", 
      "Paris", 
      "lorem.ipsum@gmail.com", 
      "Homme", 
      20, 
      40758412
    ),
    new Etudiant(
      "Test", 
      "Retest", 
      "2 rue du test", 
      "75012", 
      "Paris", 
      "test@gmail.com", 
      "Femme", 
      20, 
      62321452
    ),
  ];

  constructor() { 
  }

  public addEtudiant(etudiant: Etudiant){
    this.etudiants.push(etudiant);
  }
}
