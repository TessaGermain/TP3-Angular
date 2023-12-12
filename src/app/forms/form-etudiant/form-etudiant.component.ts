import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.scss']
})
export class FormEtudiantComponent {
  formStudent: FormGroup = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    rue: new FormControl(),
    codePostal: new FormControl(),
    ville: new FormControl(),
    mail: new FormControl(),
    genre: new FormControl(),
    age: new FormControl(),
    num: new FormControl()
  });

  constructor(private etudiantService : EtudiantService){}

  onSubmit(){
    const etudiantToAdd = new Etudiant(
      this.formStudent.get("nom")?.value,
      this.formStudent.get("prenom")?.value,
      this.formStudent.get("rue")?.value,
      this.formStudent.get("codePostal")?.value,
      this.formStudent.get("ville")?.value,
      this.formStudent.get("mail")?.value,
      this.formStudent.get("genre")?.value,
      this.formStudent.get("age")?.value,
      this.formStudent.get("num")?.value,
    );
    this.etudiantService.addEtudiant(etudiantToAdd);
    alert("Etudiant ajouté");
    this.formStudent.reset();
  }
}
