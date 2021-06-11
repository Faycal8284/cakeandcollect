import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Patisserie } from '../interfaces/patisserie';


@Injectable({
  providedIn: 'root'
})
export class PatisseriesService {
  url = 'http://localhost:8080/api/patisseries';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAllPatisseries(): Observable<Patisserie[]>{
    const API_URL=`${this.url}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
      .pipe(
        map((res: any) => res || {}),
        catchError(this.errorMgmt)
      );
  }

  getPatisserie(id: number){
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
    .pipe(
      map((res: any) => res || {}),
      catchError(this.errorMgmt)
    );
  }

     // Ajoute une Patisserie
  addPatisserie(data: Patisserie): Observable<any>{
    const API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

     // Met à jour une patisserie selon son identifiant
  updatePatisserie(id: number, data: Patisserie): Observable<any>{
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => console.log('service :' + res)),
        catchError(this.errorMgmt)
      );
  }

    // Supprime une Patisserie selon son identifiant
  deletePatisserie(id: number): Observable<any> {
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
