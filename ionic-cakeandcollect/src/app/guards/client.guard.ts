import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { CLIENT_KEY, StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanLoad {

  constructor(private router: Router, private storage: StorageService) {}

  async canLoad(): Promise<boolean> {
    const hasScreenClient = await this.storage.getStorage(CLIENT_KEY);
    //const hasScreenClient = await this.storage.get(CLIENT_KEY);
    if(hasScreenClient && hasScreenClient.value === 'true'){
      return true;
    } else {
      this.router.navigateByUrl('/client', {replaceUrl: true});
      return true;
    }
  }
}
