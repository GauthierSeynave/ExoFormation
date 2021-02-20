import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { FormationDetailsPageComponent } from './pages/formation-details-page/formation-details-page.component';
import { FormationListePageComponent } from './pages/formation-liste-page/formation-liste-page.component';
import { FormationFormPageComponent } from './pages/formation-form-page/./formation-form-page.component';

const routes: Routes = [
  {path:"", component: AccueilPageComponent},
  {path:"formulaireFormation", component: FormationFormPageComponent},
  {path:"listeFormation", component: FormationListePageComponent},
  {path:"detailsFormation/:id", component: FormationDetailsPageComponent},
  {path:"**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
