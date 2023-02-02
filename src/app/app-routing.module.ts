import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Aca hacemos el LazyLoad
const routes: Routes = [
    {path: 'home', loadChildren: () => import('./jugadores/jugadores.module').then(m => m.JugadoresModule)},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }