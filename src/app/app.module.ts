import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationFormPageComponent } from './pages/formation-form-page/formation-form-page.component';
import { FormationListePageComponent } from './pages/formation-liste-page/formation-liste-page.component';
import { FormationDetailsPageComponent } from './pages/formation-details-page/formation-details-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationFormComponent } from './components/formation-form/formation-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeFormationComponent } from './components/liste-formation/liste-formation.component';
import { CarteFormationComponent } from './components/carte-formation/carte-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationFormPageComponent,
    FormationListePageComponent,
    FormationDetailsPageComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AccueilPageComponent,
    FormationFormComponent,
    ListeFormationComponent,
    CarteFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
