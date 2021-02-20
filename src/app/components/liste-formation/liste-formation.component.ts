import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';
import { HttpFormationService } from 'src/app/services/http-formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {

  formations:Formation[] = [];
  constructor(
    private formationService: FormationService,
    private httpFormationService: HttpFormationService) { }

  ngOnInit(): void {
    this.formationService.details=false;
    this.httpFormationService.findAll()
    .subscribe(response => {
      this.formations = response;
    })
  }


}
