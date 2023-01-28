import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos los componentes
import { HomeComponent } from './components/home/home.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'jugadores', component: JugadoresComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }