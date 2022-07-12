import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobseekerProfile } from '../models/JobseekerProfile';
import { Jobseekers } from '../models/Jobseeker';

@Injectable({
  providedIn: 'root'
})
export class JobseekerprofileService {
  
  API_URL= environment.API_URL

  url='http://127.0.0.1:8000/api/jobseekerprofile/'
  JobseekerProfile: any;
  // photoUrl = "http://res.cloudinary.com/dim8pysls/image/upload/"

  constructor(private http: HttpClient) { }

  getJobseekerProfile(): Observable<JobseekerProfile[]>{
    let headers;
    
    headers = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authethication':'optimalhires1234',
      
    })
    }
    return this.http.get<JobseekerProfile[]>(this.API_URL +'jobseekerprofile', headers);

  }
  

  getJobseekers(): Observable<Jobseekers[]>{
    return this.http.get<Jobseekers[]>(this.API_URL +'jobseeker');

  }

  saveJobseekerProfileData(data:any){
    // console.log(data);
    let saveheaders;
    
    saveheaders = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authethication':'optimalhires1234'
      
    })
    }
    return this.http.post(this.API_URL +'jobseekerprofile', data, saveheaders );
  }

  deleteJobseekerProfile (jobseekerId:any){

    let deleteheaders;
    
    deleteheaders = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authethication':'optimalhires1234'
      
    })
    }

    return this.http.delete(`${this.API_URL +'jobseekerprofile'}/${jobseekerId}`, deleteheaders);
  }

  getJobseekerProfileById(jobseekerId:any){

    let getheaders;
    
    getheaders = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authethication':'optimalhires1234'
      
    })
    }

    return this.http.get(`${this.API_URL +'jobseekerprofile'}/${jobseekerId}`,getheaders);
  }

  updateJobseekerProfileData(jobseekerId:any, data:any){

    let attr;
    
    attr = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authethication':'optimalhires1234'
      
    })
    }
    return this.http.put(`${this.API_URL +'jobseekerprofile'}/${jobseekerId}`, data, attr);

  }

  

  

  


  // saveJobseekerData(data:any){
  //   console.log(data) ;
  //   return this.http.post(this.url, data);
  // }
  // getJobseeker(jobseekerId:number){
  //   return this.http.get(`${this.url}${jobseekerId}/`)
  // }    
  // updateJobseekerProfile(JobseekerProfileData:any):Observable<any>{
  //   let attr;
    
  //   attr = {headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  //   }
  //   return this.http.put('http://127.0.0.1:8000/api/updatejobseekerprofile/',JobseekerProfileData,attr)

  // }
}
