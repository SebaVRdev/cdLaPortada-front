import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
      return this.http.get(this.URL+'player').pipe(
        map( resp => resp )
      )
  }

  playerForName(name: string = ''): Observable<boolean>{
    return this.http.get(this.URL+'player-name/' + name).pipe(
      map( res => {
        console.log(res) 
        if (res) {
          return true;
        }
        else{
          return false;
        }
      })
    )
  }

  saveJugadores(jugador: Jugador): Observable<any>{
    let params = JSON.stringify(jugador)
    //Headers
    let headers = new HttpHeaders().set('Content-Type','application/json');
    const response = this.http.post(this.URL+'player',params,{headers:headers});
    return response;
  }
}
