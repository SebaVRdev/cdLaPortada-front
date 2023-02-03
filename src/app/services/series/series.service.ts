import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public URL: string;

  constructor(
    private http: HttpClient
  ) { 
    this.URL = 'http://localhost:2000/';
  }

  getSeries(): Observable<any>{
    return this.http.get(this.URL+'serie'); 
  }
}
