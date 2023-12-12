import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { HomeComponent } from './components/home/home.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EtudiantComponent,
    HomeComponent,
    SpecialiteComponent,
    EtudiantParisComponent,
    EtudiantHorsParisComponent,
    AllStudentsComponent,
    FormEtudiantComponent,
    FormSpecialiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
