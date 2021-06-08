import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
//import { Plugins } from '@capacitor/core';
//const { Storage } = Plugins;

export const CLIENT_KEY = 'espace-client';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key, value) {
    return Storage.set({
      key,
      value
    });
  }

  getStorage(key) {
    return Storage.get({key});
  }

}
