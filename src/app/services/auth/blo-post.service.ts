import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BloPostService {

  constructor(private http:HttpClient, private _authService: AuthService) { }

  create(post, token) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._authService.token
      })
    };
    return this.http.post('/api/posts', JSON.stringify(post), httpOptions);
  }
}
