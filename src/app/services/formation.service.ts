import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  formation!:Formation;
  details:boolean = false;
  constructor() { }
}
