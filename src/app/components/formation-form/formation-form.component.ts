import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpFormationService } from 'src/app/services/http-formation.service';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.scss']
})
export class FormationFormComponent implements OnInit {

  formationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private httpFormationService: HttpFormationService) { 
    this.formationForm = this.fb.group({
      id: [],
      nom: [""],
      theme: [""],
      duree: [],
      prix: [],
      date: [""],
      description: [""]
    })
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.httpFormationService.save(this.formationForm.value)
    .subscribe(Response =>{
      console.log(this.formationForm.value);
    })
    this.formationForm.reset();
    }



}
