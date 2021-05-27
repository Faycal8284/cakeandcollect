import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Categorie } from '../interfaces/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'http://localhost:8080/api/categories';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Categorie[]>{
    const API_URL=`${this.url}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
      .pipe(
        map((res: any) => res || {}),
        catchError(this.errorMgmt)
      );
  }

  getCategorie(id: number){
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
    .pipe(
      map((res: any) => res || {}),
      catchError(this.errorMgmt)
    );
    }

     // Ajoute une Categorie
  addCategorie(data: Categorie): Observable<any>{
    const API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

     // Met à jour une Categorie selon son identifiant
  updateCategorie(id: number, data: Categorie): Observable<any>{
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => console.log('service :' + res)),
        catchError(this.errorMgmt)
      );
  }

    // Supprime une Categorie selon son identifiant
  deleteCategorie(id: number): Observable<any> {
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
