/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import Commerce from '@chec/commerce.js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommerceClientService {

  private mClient: any;

  constructor() {
    this.mClient = new Commerce(
      environment.commerceApiKey,
      !environment.production,
    );
  }

  get client(): any {
    return this.mClient;
  }


}
