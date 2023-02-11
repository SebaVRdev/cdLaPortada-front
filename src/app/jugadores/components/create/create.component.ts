import { Component, OnInit } from '@angular/core';

//Importamos el modelo de Proyecto para poder crearlo
import { Jugador } from 'src/app/models/jugador';

import { JugadoresService } from 'src/app/services/jugadores/jugadores.service';
import { UploadImageService } from 'src/app/services/upload-image/upload-image.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [JugadoresService] //Cargamos servicio
})

export class CreateComponent implements OnInit {
  //Creamos propiedad para titulo del componente
  public title: string;
  public status: string;
  public saveJugador: Jugador;

  public jugador: Jugador; //Objeto que modificara el formulario

  public fileToUpload: Array<File>; //Archivos para subir

  private url: string;

  constructor(
    private jugadoresService: JugadoresService,
    private uploadService: UploadImageService
  ){
    this.url = 'http://localhost:2000/';
    this.title = 'Ingresar Jugador';
    this.status = "";
    this.fileToUpload =  new Array();
    this.jugador = new Jugador("","",0,"",0,0,0,true,"");
  }

  ngOnInit(): void {
  }
  
  onSubmit(form:any){
    //Cuando hacemos onSubmit utilizamos el metodo de los servicios
    this.jugadoresService.saveJugadores(this.jugador).subscribe(
      response => {
        console.log(response)
        if (response.player){
          //Siempre que se guarde e player le agregamos su imagen
          this.saveJugador = response.player;
          this.uploadService.makeFileRequest(this.url+'player/upload-img/'+this.saveJugador.id,[],this.fileToUpload,'image').subscribe(
            res => {
              this.status = 'success';
            },
            err => {
              this.status = 'img-failed';    
            } 
          );
        }
        else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(error.message)}
    )
  };

  //Cada vez que haya un cambio se ejecuta esto
  fileChangeEvent(fileInput: any){
    //Entrega un evento "FileInput" en esa informacion estara el nombre del archivo que se ha seleccionado
    console.log(fileInput);
    this.fileToUpload = <Array<File>>fileInput.target.files; //Guardamos el dato en esta variable que se utilizara en el makeFileRequest()
    console.log(this.fileToUpload);
  }



}