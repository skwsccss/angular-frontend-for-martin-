import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable()

export class ServiceUtils {
    private token: string;
    private serverUrl = environment.serverUrl;

    constructor(private http: HttpClient, private router: Router) { }

    public ApiGET(endpoint) {
        this.token = localStorage.getItem('token');
        const url = `${this.serverUrl}` + '/' + endpoint;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.token
            })
        };

        return this.http.get(url, httpOptions)
            .pipe(
                tap((res: any) => {
                    return res;
                }
                    , (err: any) => {
                        if (err.status == 401) {
                            // this.router.navigate(['/login']);
                        } else if (err.status == 200) {
                            return err;
                        } else {
                            // this.router.navigate(['/serverErr'])
                            return null;
                        }

                    }
                )
            );
    }

    public ApiPOST(endpoint, payload) {
        this.token = localStorage.getItem('token');
        const url = `${this.serverUrl}` + '/' + endpoint;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        };

        return this.http.post(url, payload, httpOptions)
            .pipe(
                tap((res: any) => {
                    return res;
                }
                    , (err: any) => {
                        if (err.status == 401) {
                            this.router.navigate(['/login']);
                        } else {
                            // this.router.navigate(['/serverErr'])
                        }
                        return null;
                    }
                )
            );
    }

    public ApiDELETE(endpoint) {
        this.token = localStorage.getItem('token');
        const url = `${this.serverUrl}` + '/' + endpoint;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        };

        return this.http.delete(url, httpOptions)
            .pipe(
                tap((res: any) => {
                    return res;
                }
                    , (err: any) => {
                        if (err.status == 401) {
                            this.router.navigate(['/login']);
                        } else {
                            // this.router.navigate(['/serverErr'])
                        }
                        return null;
                    }
                )
            );
    }

}
