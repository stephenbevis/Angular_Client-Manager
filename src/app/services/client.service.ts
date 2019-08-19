import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Properties
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) { 
    this.clientsCollection = this.afs.collection<Client>('clients');
  }

  getClients(): Observable<Client[]> {
    // Get Clients With ID
    this.clients = this.clientsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        const id = action.payload.doc.id;
        return {id, ...data};
      });
    }));

    return this.clients;
  }
}
