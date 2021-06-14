/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendeur } from '../interfaces/Vendeur';

const AUTH_API_VENDEUR = 'http://localhost:8080/api/auth/vendeur/';
//const API_VENDEUR = 'http://localhost:8080/api/auth/vendeurs/';

//const AUTH_API_CLIENT = 'http://localhost:8080/api/auth/client/';

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
    return this.http.post(AUTH_API_VENDEUR + 'signin', {
      email,
      password
    }, httpOptions);
  };

  register(nom: string, prenom: string, siret: string, email: string, mdp: string, img: string, categorie: string, note: number, code_promo: string, particulier: boolean, tel: string, descriptions: string, actif: boolean, rue: string, code_postal: string, ville: string): Observable<Vendeur> {
    return this.http.post(AUTH_API_VENDEUR + 'signup', {
      nom,
      prenom,
      siret,
      email,
      mdp,
      img,
      categorie,
      note,
      code_promo,
      particulier,
      tel,
      descriptions,
      actif,
      rue,
      code_postal,
      ville
    }, httpOptions);
  };
}
