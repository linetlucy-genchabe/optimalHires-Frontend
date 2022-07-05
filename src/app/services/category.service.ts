import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../models/Category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = environment.API_URL

  constructor(private http: HttpClient) { }


  getCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(this.API_URL +'category');

  }
}
