import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresRoutingModule } from './jugadores-routing.module'; 
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
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
    NgxPaginationModule,
    FormsModule,
    JugadoresRoutingModule
  ]
})
export class JugadoresModule { }