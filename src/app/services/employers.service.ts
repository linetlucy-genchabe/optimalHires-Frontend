import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employers } from '../models/Employers';

@Injectable({
  providedIn: 'root'
})
export class EmployersService {
  API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  getEmployers(): Observable<Employers[]>{
    return this.http.get<Employers[]>(this.API_URL +'employer');

  }
    

}
