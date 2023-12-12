import { Component } from '@angular/core';
import { Specialite } from 'src/app/models/specialite';
import { SpecService } from 'src/app/services/spec.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent {
  specialites: Specialite[] = [];
  constructor(private specialiteService: SpecService){
    this.specialites = this.specialiteService.specialite;
  }
}
