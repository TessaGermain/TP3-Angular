import { Component } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrls: ['./etudiant-paris.component.scss']
})
export class EtudiantParisComponent {
  etudiants: Etudiant[] = [];
  constructor(private etudiantService: EtudiantService){
    this.etudiants = this.etudiantService.etudiants;
  }
}
