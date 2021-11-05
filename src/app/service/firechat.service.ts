import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, orderBy} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { Mensaje } from "../interface/mensaje.interface"


@Injectable({
  providedIn: 'root'
})
export class FirechatService {
 
  constructor(private firestore: Firestore) { }

  public chats: Mensaje[]= [];

  obtenerCollection(){
    const dataCol = collection(this.firestore, 'chats');
    const data = collectionData(dataCol)


    return collectionData(dataCol)
                        .pipe( map( (data) => {
                           const mensajes = data as Mensaje[]
                           this.chats = mensajes
                           console.log(this.chats);
                        }))                
  }

  agregarMensaje(mensaje: Mensaje){
    mensaje.fecha = new Date().getTime();
    const dataCol = collection(this.firestore, "chats");
    return addDoc(dataCol, mensaje)
  }
}
