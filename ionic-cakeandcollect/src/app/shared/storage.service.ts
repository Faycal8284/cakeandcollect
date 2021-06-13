/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
//import { Storage } from '@capacitor/storage';
//import { Plugins } from '@capacitor/core';
//const { Storage } = Plugins;

import { Storage } from '@ionic/storage-angular';

export const CLIENT_KEY = 'espace-client';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage;

  constructor(private storage: Storage) { // Méthode 2
    this.init();
   }

   // avec capacitor
  /* setStorage(key, value) {
    return Storage.set({
      key,
      value
    });
  } */

  /* getStorage(key) {
    return Storage.get({key});
  } */

  // Méthode 2 avec storage angular
  async init() {
    // If using, define drivers here: await this.storage.defineDriver
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }

}
