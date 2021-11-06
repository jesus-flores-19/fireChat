import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore/';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { Mensaje } from "../interface/mensaje.interface"


@Injectable({
  providedIn: 'root'
})
export class FirechatService {
 
  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) { }

  private itemsCollection: AngularFirestoreCollection<any>
  public chats: Mensaje[]= [];

  obtenerCollection(){
    this.itemsCollection = this.afs.collection("chats", ref => ref.orderBy("fecha", "desc").limit(15))
    return this.itemsCollection.valueChanges()
                          .pipe( map( (data) => {
                             this.chats= []
                             const mensajes = data as Mensaje[]
                             for(let mensaje of mensajes){
                               this.chats.unshift(mensaje)
                             }
                          }))              
  }

  agregarMensaje(mensaje: Mensaje){
    mensaje.fecha = new Date().getTime();
    return this.itemsCollection.add(mensaje)
    // return addDoc(dataCol, mensaje)
  }
  login(){
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
}
