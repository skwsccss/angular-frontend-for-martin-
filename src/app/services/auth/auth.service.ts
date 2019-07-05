import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ServiceUtils } from '../serviceUtils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean = false;
  public user: User;
  public token: string;

  private serverUrl = environment.serverUrl;

  constructor(private http: HttpClient, private router: Router, private serviceUtils: ServiceUtils) {

  }

  public checkLogin() {
    if(this.token) return true;
    let token = localStorage.getItem('token');
    if(token) {
      this.token = token;
      return true;
    }
    return false;
  }

  public login(username: string, password: string) {
    const url = `${this.serverUrl}` + '/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, { 'username': username, 'password': password }, httpOptions)
      .pipe(
        tap((res: any) => {
          console.log(res)
          this.token = res.token;
          if (this.token.length) {
            this.isLoggedIn = true;
            this.user = res.user;
            localStorage.setItem('token', this.token);
            localStorage.setItem('user', JSON.stringify(this.user));
          } else {
            this.isLoggedIn = false;
            localStorage.setItem('token', '');
          }
          return this.token;
        }
          , (err: any) => {
            console.log("Server Error.")
          }
        )
      );
  };

  public logout() {
    this.isLoggedIn = false;
    this.token = '';
    localStorage.setItem('token', '');
    this.router.navigate(['/login/']);
  }

}
