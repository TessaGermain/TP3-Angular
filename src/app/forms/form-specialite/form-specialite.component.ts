import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Specialite } from 'src/app/models/specialite';
import { SpecService } from 'src/app/services/spec.service';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styleUrls: ['./form-specialite.component.scss']
})
export class FormSpecialiteComponent {
  formSpec : FormGroup = new FormGroup({
    id: new FormControl(),
    libelle: new FormControl()
  });

  constructor(private specialiteService: SpecService){}

  onSubmit(){
    const specialiteToAdd = new Specialite(this.formSpec.get("libelle")?.value, this.formSpec.get("id")?.value);
    this.specialiteService.addSpecialite(specialiteToAdd);
    alert("Spécialité ajoutée");
    this.formSpec.reset();
  }
}
