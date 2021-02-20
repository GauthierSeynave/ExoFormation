import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';
import { FormationFormComponent } from '../formation-form/formation-form.component';

@Component({
  selector: 'app-carte-formation',
  templateUrl: './carte-formation.component.html',
  styleUrls: ['./carte-formation.component.css']
})
export class CarteFormationComponent implements OnInit {

  @Input() formation!:Formation;
  details!:boolean;
  constructor(
    private formationService: FormationService,
    private router:Router) { }

  ngOnInit(): void {
    this.details = this.formationService.details;
  }
  onConsulterDetail = (formation:Formation) => {
    this.formationService.details=true;
    this.formationService.formation = this.formation;
    this.router.navigate(['/detailsFormation/:id', {formation}])
  }

}
