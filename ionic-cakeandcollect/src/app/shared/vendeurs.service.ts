import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Vendeur } from '../interfaces/Vendeur';

@Injectable({
  providedIn: 'root'
})
export class VendeursService {
  url = 'http://localhost:8080/api/vendeurs';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAllVendeurs(): Observable<Vendeur[]>{
    const API_URL=`${this.url}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
      .pipe(
        map((res: any) => res || {}),
        catchError(this.errorMgmt)
      );
  }

  getVendeur(id: number){
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
    .pipe(
      map((res: any) => res || {}),
      catchError(this.errorMgmt)
    );
    }

     // Ajoute une Vendeur
  addVendeur(data: Vendeur): Observable<any>{
    const API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

     // Met à jour une Vendeur selon son identifiant
  updateVendeur(id: number, data: Vendeur): Observable<any>{
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => console.log('service :' + res)),
        catchError(this.errorMgmt)
      );
  }

    // Supprime une Vendeur selon son identifiant
  deleteVendeur(id: number): Observable<any> {
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
