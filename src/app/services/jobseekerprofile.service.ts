import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobseekerProfile } from '../models/JobseekerProfile';

@Injectable({
  providedIn: 'root'
})
export class JobseekerprofileService {
  API_URL= environment.API_URL

  constructor(private http: HttpClient) { }

  getJobseekerProfile(): Observable<JobseekerProfile[]>{
    return this.http.get<JobseekerProfile[]>(this.API_URL +'jobseekerprofile');

  }
}
