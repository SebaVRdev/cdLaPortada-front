import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(jugadores: Jugador[], search: string = ''): Jugador[] {
    if (search.length === 0) {
      return jugadores;
    }
    search = search.toLowerCase();
    const filteredPlayer = jugadores.filter( Jugador => Jugador.name.toLowerCase().includes(search));
    return filteredPlayer;
  }

}
