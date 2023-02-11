import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private url: string;

  constructor( private _http: HttpClient) { 
    this.url = 'http://localhost:2000/';
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string):Observable<any> {
    //Definios la peticion 
    let formData = new FormData();

    //Recorremos todos los archivos que recibamos
    for(let i = 0; i < files.length; i++){  
        formData.append(name,files[i], files[i].name); //agregamos el nombre que indiquemos, adjuntamos el fichero y recogemos el nombre
    }

    //console.log(formData);

    //Al tener el formData en metodo post
    return this._http.post(url,formData);
  }
}