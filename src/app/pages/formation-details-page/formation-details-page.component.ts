import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-details-page',
  templateUrl: './formation-details-page.component.html',
  styleUrls: ['./formation-details-page.component.scss']
})
export class FormationDetailsPageComponent implements OnInit {

  formation!:Formation;
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formation = this.formationService.formation;
  }

}
