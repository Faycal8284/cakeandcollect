import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'http://localhost:8080/api/contact';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };

  constructor(private httpClient: HttpClient) { }

  getAllContact(): Observable<Contact[]>{
    const API_URL=`${this.url}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
      .pipe(
        map((res: any) => res || {}),
        catchError(this.errorMgmt)
      );
  }
  
  getContact(id: number){
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.get(API_URL, {headers:this.headers})
    .pipe(
      map((res: any) => res || {}),
      catchError(this.errorMgmt)
    );
    }

     // Ajoute une Categorie
  addContact(data: Contact): Observable<any>{
    const API_URL = `${this.url}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  deleteContact(id: number): Observable<any> {
    const API_URL = `${this.url}/${id}`;
    return this.httpClient.delete(API_URL, this.httpOptions)
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