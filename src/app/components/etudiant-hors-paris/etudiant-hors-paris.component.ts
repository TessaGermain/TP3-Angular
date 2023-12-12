import { Component } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.scss']
})
export class EtudiantHorsParisComponent {
  etudiants: Etudiant[] = [];
  constructor(private etudiantService: EtudiantService){
    this.etudiants = this.etudiantService.etudiants;
  }
}
