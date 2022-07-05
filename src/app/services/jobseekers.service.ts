import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Jobseekers } from '../models/Jobseeker';

@Injectable({
  providedIn: 'root'
})
export class JobseekersService {
  API_URL = environment.API_URL

  constructor(private http: HttpClient) { }


  getJobseekers(): Observable<Jobseekers[]>{
    return this.http.get<Jobseekers[]>(this.API_URL +'jobseeker');

  }
}
