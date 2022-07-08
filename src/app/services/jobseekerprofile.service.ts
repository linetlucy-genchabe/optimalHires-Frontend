import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobseekerProfile } from '../models/JobseekerProfile';

@Injectable({
  providedIn: 'root'
})
export class JobseekerprofileService {
  API_URL= environment.API_URL

  url='http://127.0.0.1:8000/api/jobseeker/'
  // photoUrl = "http://res.cloudinary.com/dim8pysls/image/upload/"

  constructor(private http: HttpClient) { }

  getJobseekerProfile(): Observable<JobseekerProfile[]>{
    return this.http.get<JobseekerProfile[]>(this.API_URL +'jobseekerprofile');

  }

  saveJobseekerData(data:any){
    console.log(data) ;
    return this.http.post(this.url, data);
  }
  getJobseeker(jobseekerId:number){
    return this.http.get(`${this.url}${jobseekerId}/`)
  }    
  updateJobseekerProfile(JobseekerProfileData:any):Observable<any>{
    let attr;
    
    attr = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
    return this.http.put('http://127.0.0.1:8000/api/updatejobseekerprofile/',JobseekerProfileData,attr)

  }
}
