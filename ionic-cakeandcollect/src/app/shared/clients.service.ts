import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Client } from '../interfaces/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  url = 'http://localhost:8080/api/Clients';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAllClients(): Observable<Client[]>{
    const API_URL=`${this.url}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
      .pipe(
        map((res: any) => res || {}),
        catchError(this.errorMgmt)
      );
  }

  getClient(id: number){
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
    .pipe(
      map((res: any) => res || {}),
      catchError(this.errorMgmt)
    );
    }

     // Ajoute une Client
  addClient(data: Client): Observable<any>{
    const API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

     // Met à jour une Client selon son identifiant
  updateClient(id: number, data: Client): Observable<any>{
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => console.log('service :' + res)),
        catchError(this.errorMgmt)
      );
  }

    // Supprime une Client selon son identifiant
  deleteClient(id: number): Observable<any> {
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

 errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
