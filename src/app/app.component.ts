import { Component } from '@angular/core';
import { FolderTokenService } from './services/folder-token/folder-token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Portada';

  constructor(
    private serviceFolderToken: FolderTokenService
  ){
    this.setSession();
  }

  setSession(){
    this.serviceFolderToken.qpIsiInsert();
  }
}
