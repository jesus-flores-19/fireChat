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
    
  }

  data: Mensaje= {
    mensaje: "",
    nombre: ""
  };
  elemento: any;

  ngOnInit(): void {
    this.elemento = document.getElementById("app-mensajes")
  }

  usuario(nombre: any){
    this.data.nombre = nombre
    this.firechat.obtenerCollection().subscribe( () => {
      setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20)
    });
  }

  enviarMensaje(){
    if(this.data.mensaje.length == 0) return;
    if(this.data.nombre?.length==0){
      alert("escogueee un usuario xd")
      return;
    }
    console.log(this.data);
    this.firechat.agregarMensaje(this.data)
                  .then( ()=> this.data.mensaje ="" )
                  .catch(()=> console.error("Error"))
    
  }

}
