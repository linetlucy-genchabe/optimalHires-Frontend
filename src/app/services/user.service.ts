// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/';
// import { map } from 'rxjs/operators';

// import { Jobseekers } from '../models/Jobseeker';
// import { environment } from 'src/environments/environment';


// const url = 'https://optimalhires.herokuapp.com/api/jobseeker'

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   baseurl = 'https://optimalhires.herokuapp.com/api/employer'
//   baseurll = 'https://optimalhires.herokuapp.com/api/users'
//   photoUrl = "http://res.cloudinary.com/linetlucy/image/upload/"
//   API_URL = environment.API_URL
  

//   constructor(private http: HttpClient) { }


//   registerUser(userData: any): Observable<any> {
//     let headers;
//     console.log(userData)
//     headers = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     }
//     return this.http.post('https://optimalhires.herokuapp.com/api/users', userData, headers)
//   }

//   loginUser(userData:any):Observable<any>{
//     return this.http.post('http://optimalhires.herokuapp.com/api-token-auth/',userData)
//   }

//   getAllUsers():Observable<any>{
//     return this.http.get(this.baseurll)
//   }
//   getEmployers():Observable<any>{
//     return this.http.get(this.baseurl)
//   }

//   getJobseekers(): Observable<Jobseekers[]>{
//     return this.http.get<Jobseekers[]>(this.API_URL +'jobseeker');

//   }
  
//   getAdminBoard(): Observable<any> {
//     return this.http.get(url , { responseType: 'text' });
//   }
  
  

// }
