import { Component, OnInit } from '@angular/core';
import { FirechatService } from 'src/app/service/firechat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public firechat: FirechatService) { 
    this.firechat.obtenerCollection().subscribe();
    console.log(this.firechat.chats);
    
  }

  mensaje: any = "";

  ngOnInit(): void {
  }

  enviarMensaje(){
    console.log(this.mensaje);
  }

}
