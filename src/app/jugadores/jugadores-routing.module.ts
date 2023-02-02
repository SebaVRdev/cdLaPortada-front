import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  {path:'', children:[
    {path: 'players', component: JugadoresComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'create', component: CreateComponent},
    {path: '**', redirectTo:'players'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadoresRoutingModule { }
