import { Component } from '@angular/core';

//Traemos modelo para manejo de jugadores
import { Jugador } from 'src/app/models/jugador';

//Traemos servicio
import { JugadoresService } from 'src/app/services/jugadores/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})

export class JugadoresComponent {

  public title: string;
  public jugadores: Jugador[];
  public page: number; //Recoge el numero de pagina en la que estamos 

  constructor( private _jugadoresService: JugadoresService ){
    this.title = "Jugadores"
    this.jugadores = new Array();

  }

  ngOnInit(): void {
    //A penas se cargue la vista cargamos los jugadores
    this.getJugadores();
  }

  getJugadores(){
    this._jugadoresService.getJugadores().subscribe(
      res => {
        if (res.players) {
          this.jugadores = res.players; 
          console.log(this.jugadores);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
