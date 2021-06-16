/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/semi */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<any> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8080/api/file/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/info');
  }

  uploadImage(formData){
   return this.http.post<any>('http://localhost:8080/file', formData).subscribe(res =>
          (res) =>  console.log(res),
          (err) => console.log(err)
    )
  }

  addImageForm(image: any): Observable<any>{
    return this.http.post('http://localhost:8080/file', image)
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
