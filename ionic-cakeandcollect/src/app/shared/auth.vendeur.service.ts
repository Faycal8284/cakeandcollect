import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API_VENDEUR = 'http://localhost:8080/api/auth/vendeur/';

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

  register(nom: string, prenom: string, email: string, mdp: string): Observable<any> {
    return this.http.post(AUTH_API_VENDEUR + 'signup', {
      nom,
      prenom,
      email,
      mdp
    }, httpOptions);
  };
}
