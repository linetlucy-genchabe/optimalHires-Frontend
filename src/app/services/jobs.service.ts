import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Jobs } from '../models/Jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  API_URL= environment.API_URL

  constructor(private http:HttpClient) { }

  getJobs():Observable<Jobs[]>{
    return this.http.get<Jobs[]>(this.API_URL+'job');
  }
}
