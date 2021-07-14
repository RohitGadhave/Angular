import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.apiUrl; 
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getUserById(id: string): Observable<any> {
    const url = this.apiUrl+"/user/"+id;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  addUser(gallery: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('imageTitle', gallery.imageTitle);
    formData.append('imageDesc', gallery.imageDesc);
    const header = new HttpHeaders();
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('POST', this.apiUrl+"/user", formData, options);
    return this.http.request(req);
  }
}
