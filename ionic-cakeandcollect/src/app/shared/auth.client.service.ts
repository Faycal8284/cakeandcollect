/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/Client';

const AUTH_API_CLIENT = 'http://localhost:8080/api/auth/client/';

const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API_CLIENT + 'signin', {
      email,
      password
    }, httpOptions);
  };

  register(nom: string, prenom: string, email: string, mdp: string, img: string, tel: string, actif: boolean, rue: string, code_postal: string, ville: string, note_vendeur: string, avis_commande: string): Observable<Client> {
    return this.http.post(AUTH_API_CLIENT + 'signup', {
      nom,
      prenom,
      email,
      mdp,
      img,
      tel,
      actif,
      rue,
      code_postal,
      ville,
      note_vendeur,
      avis_commande
    }, httpOptions);
  };
}
