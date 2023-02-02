import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugadoresRoutingModule } from './jugadores-routing.module'; 

import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SeriesComponent } from './components/series/series.component';

@NgModule({
  declarations: [
    HomeComponent,
    JugadoresComponent, 
    CreateComponent, 
    SeriesComponent, 
  ],
  imports: [
    CommonModule,
    JugadoresRoutingModule,
    FormsModule
  ]
})
export class JugadoresModule { }