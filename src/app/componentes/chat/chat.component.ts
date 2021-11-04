import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/interface/mensaje.interface';
import { FirechatService } from 'src/app/service/firechat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public firechat: FirechatService) { 
    this.firechat.obtenerCollection().subscribe();
  }

  data: Mensaje= {
    mensaje: ""
  };

  ngOnInit(): void {
  }

  enviarMensaje(){
    if(this.data.mensaje.length == 0) return;
    
    console.log(this.data);
    this.firechat.agregarMensaje(this.data)
    
  }

}
