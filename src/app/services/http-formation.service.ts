import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class HttpFormationService {

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Formation[]>('http://localhost:3000/formations');
  }
  
  save(formation: Formation) {
    return this.httpClient.post<Formation>('http://localhost:3000/formations', formation);
  }
}
