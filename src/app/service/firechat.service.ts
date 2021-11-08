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
 
  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {

    this.auth.authState.subscribe( user =>{
      console.log("Estado de usuario: ", user);
      if(!user){
        return;
      }
      
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid
      console.log(this.usuario);
      
    })
    this.itemsCollection = this.afs.collection("newchat", ref => ref.orderBy("fecha", "desc").limit(15));

   }

  private itemsCollection: AngularFirestoreCollection<any>
  public chats: Mensaje[]= [];
  public usuario: any = {}

  obtenerCollection(){
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
    mensaje.uid = this.usuario.uid;
    mensaje.nombre = this.usuario.nombre
    return this.itemsCollection.add(mensaje)
    // return addDoc(dataCol, mensaje)
  }

  login(proveedor: string){
    if(proveedor === "facebook"){
      this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
    if(proveedor === "google"){
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }
  
  logout(){
    this.auth.signOut().then(()=>{
      this.usuario = {}
    });
  }
}
