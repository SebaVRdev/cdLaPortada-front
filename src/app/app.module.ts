import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Configuracion Rutas
import { AppRoutingModule } from './app-routing.module';

//APP_INITIALIZER
function initializeApp(): Promise<any> {
  return new Promise((resolve, reject) => {
    //Hacer una ejecucion en caso de que sea una promesa se resuelve y luego hace la ejecucion  
    console.log("Iniciando app a traves de 'APP_INITIALIZER'")
    resolve(() => {
      console.log("Cuando se resuelva se inicia la APP")
    });
  });
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   
  constructor(){
    this.init();
  }
  init(){
    console.log("Inicio desde constructor app.module")
  }
}
