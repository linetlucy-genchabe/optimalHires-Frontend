import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployerProfile } from '../models/EmployerProfile';

@Injectable({
  providedIn: 'root'
})
export class EmployerprofileService {

  API_URL= environment.API_URL

  constructor(private http: HttpClient) { }

  getEmployerProfile(): Observable<EmployerProfile[]>{
    return this.http.get<EmployerProfile[]>(this.API_URL +'employerprofile');

  }
}
