import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private log = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }


  getAuth(): Observable<any> {
    const url = this.log
    return this.http.get<any>(url, { withCredentials: true })
  }
  Valid(user: string): Observable<any> {
    const url = this.log + 'valid'
    return this.http.get<boolean>(`${url}/${user}`, { withCredentials: true })
  }



}
