import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Jobtypes } from '../models/Jobtype';

@Injectable({
  providedIn: 'root'
})
export class JobtypeService {
  API_URL = environment.API_URL

  constructor(private http: HttpClient) { }


  getJobtypes(): Observable<Jobtypes[]>{
    return this.http.get<Jobtypes[]>(this.API_URL +'jobtype');

  }
}
