import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection} from '@angular/fire/firestore';
// import {collection} from "firebase/firestore"

@Injectable({
  providedIn: 'root'
})
export class FirechatService {
 
  constructor(private firestore: Firestore) { }

  obtenerCollection(){
    const dataCol = collection(this.firestore, 'familia');
    return collectionData(dataCol);
  }
}
