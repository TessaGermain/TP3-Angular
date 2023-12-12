import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "specialite", component: SpecialiteComponent},
  {path: "allStudents", component: AllStudentsComponent},
  {path: "addStudent", component: FormEtudiantComponent},
  {path: "addSpecialite", component: FormSpecialiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
