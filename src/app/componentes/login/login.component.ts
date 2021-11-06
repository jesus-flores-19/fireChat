import { Component, OnInit } from '@angular/core';
import { FirechatService } from 'src/app/service/firechat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firechat: FirechatService) { }

  ngOnInit(): void {
  }

  ingresar(provedor: string){
    this.firechat.login()
  }

}
