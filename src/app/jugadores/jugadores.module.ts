import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

//Components
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';

//Routes
import { JugadoresRoutingModule } from './jugadores-routing.module';
import { FiltroPipe } from './pipes/filtro.pipe'; 

@NgModule({
  declarations: [
    HomeComponent,
    JugadoresComponent, 
    CreateComponent, 
    SeriesComponent, FiltroPipe, 
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    JugadoresRoutingModule
  ]
})
export class JugadoresModule { }