import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from 'src/app/models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  public URL: string;

  constructor(
    private http: HttpClient
  ) { 
    this.URL = 'http://localhost:2000/';
  }

  getJugadores(): Observable<any>{
      return this.http.get(this.URL+'players'); 
  }
}
