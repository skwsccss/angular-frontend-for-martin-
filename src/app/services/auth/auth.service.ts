import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean = false;
  public user: User;
  public token: string;

  private serverUrl = environment.serverUrl;

  constructor(private http: HttpClient, private router: Router) {

   }

   public checkLogin(){
     this.token = localStorage.getItem('token');
     const url = `${this.serverUrl}`;
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         token: this.token
       })
     };

     return this.http.get(url, httpOptions)
      .pipe(
        tap((res: any) => {
          if (res.status == true) {
            let user = localStorage.getItem('user');
            if (user !== undefined) this.user = JSON.parse(user);
            this.isLoggedIn = true;
            return true;
          } else {
            this.isLoggedIn = false;
            return false;
          }
        },
          (err) => {
            this.isLoggedIn = false;
            return false;
          }
        )
      );
   }

   public login(email: string, password: string) {
    const url = `${this.serverUrl}` + '/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, { 'email': email, 'password': password }, httpOptions)
      .pipe(
        tap((res: { token: string, userID: string, email: string, avatar: string, name: string }) => {
          this.token = res.token;
          if (this.token.length) {
            this.isLoggedIn = true;
            this.user = res;
            localStorage.setItem('token', this.token);
            localStorage.setItem('user', JSON.stringify(this.user));
          } else {
            this.isLoggedIn = false;
            localStorage.setItem('token', '');
          }
          return this.token;
        })
      );
  }

  public logout() {
    this.isLoggedIn = false;
    localStorage.setItem('token', '');
    this.router.navigate(['/login']);
  }

  public getUser() {
    let user = localStorage.getItem('user');
    return this.user = JSON.parse(user);
  }

  public updateProfile(avatar: string, name: string) {
    const url = `${this.serverUrl}` + '/user/updateProfile';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.token
      })
    };

    return this.http.post(url, { avatar, name }, httpOptions)
      .pipe(
        tap((res: any) => {
          if (res.status) {
            this.user.name = res.user.name
            this.user.avatar = res.user.avatar
            localStorage.setItem('user', JSON.stringify(this.user));
          }
          return res
        })
      );
  }

  public changepassword(currentPassword, newPassword) {
    const url = `${this.serverUrl}` + '/user/changepassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: this.token
      })
    };

    return this.http.post(url, { currentPassword, newPassword }, httpOptions)
      .pipe(
        tap((res: any) => {
          return res
        })
      );
  }

  public forgotpassword(email) {
    const url = `${this.serverUrl}` + '/forgotpassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(url, { email }, httpOptions)
      .pipe(
        tap((res: any) => {
          return res
        })
      );
  }

  public resetpassword(newPassword, token, email) {
    const url = `${this.serverUrl}` + '/resetpassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(url, { newPassword, token, email }, httpOptions)
      .pipe(
        tap((res: any) => {
          return res
        })
      );
  }
}
