import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirechatService } from './service/firechat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public fireService: FirechatService){
  }
  title = 'fireChat';
  loggout(){
    this.fireService.logout();
  }

}
