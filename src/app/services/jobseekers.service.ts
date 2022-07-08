import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jobseekers } from '../models/Jobseeker';

@Injectable({
  providedIn: 'root'
})


export class JobseekersService {
  API_URL = environment.API_URL

  // baseurl = "http://127.0.0.1:8000/users/"
  baseurl = "http://127.0.0.1:8000/api/jobseeker/"
  // photoUrl = "http://res.cloudinary.com/dim8pysls/image/upload/"

  constructor(private http: HttpClient) { }


  getJobseekers(): Observable<Jobseekers[]>{
    return this.http.get<Jobseekers[]>(this.API_URL +'jobseeker');

  }


  registerJobseeker(JobseekerData: any): Observable<any> {
    let headers;
    console.log(JobseekerData)
    headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post('http://127.0.0.1:8000/api/jobseeker/', JobseekerData, headers)
  }

  updateJobseekerProfile(JobseekerProfileData:any):Observable<any>{
    let attr;
    
    attr = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
    }
    return this.http.put('http://127.0.0.1:8000/api/jobseekerprofile/',JobseekerProfileData,attr)

  }

  loginJobseeker(jobseekerData:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api-auth/',jobseekerData)
  }

  getAllJobseekers():Observable<any>{
    return this.http.get(this.baseurl)
  }

  // upload(file:any):Observable<any> {
  //   // Create form data
  //   const formData = new FormData();   
  //   // Store form name as "file" with file data
  //   formData.append("file", file, file.name);
  //   // Make http post request over api
  //   // with formData as req
  //   return this.http.post(this.photoUrl, formData)
  // }
}
