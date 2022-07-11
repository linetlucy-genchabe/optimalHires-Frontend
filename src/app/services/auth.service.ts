import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loginUrl, logoutUrl, loginemployerUrl} from 'src/environments/environment';



// const url = 'https://optimalhires.herokuapp.com/'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }
  login(data: any):Observable<any>{
    return this.http.post(loginUrl, data)
  }
  loginemployer(data: any):Observable<any>{
    return this.http.post(loginemployerUrl, data)
  }


  logout(data: any):Observable<any>{
    return this.http.post(logoutUrl, data)
  }

  registerJobseeker(userData:any): Observable<any>{
      return this.http.post('https://optimalhires.herokuapp.com/api/signup/jobseeker/', userData);
    }
   
  registerEmployer(userData:any): Observable<any>{
    return this.http.post('https://optimalhires.herokuapp.com/api/signup/employer/', userData);
  }
  registerAdmin(userData:any): Observable<any>{
      return this.http.post('https://optimalhires.herokuapp.com/api/admin/', userData);
    }
  loginJobseeker(userData:any): Observable<any>{
      return this.http.post('https://optimalhires.herokuapp.com/api/login/', userData);
    }
  loginEmployer(userData:any): Observable<any>{
      return this.http.post('https://optimalhires.herokuapp.com/api/login/', userData);
    }
    
  
}
