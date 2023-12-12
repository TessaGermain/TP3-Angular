import { Component } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent {
  etudiants: Etudiant[] = [];
  constructor(private etudiantService: EtudiantService){
    this.etudiants = this.etudiantService.etudiants;
  }
}
