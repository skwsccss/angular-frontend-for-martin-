import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceUtils } from '../serviceUtils';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http: HttpClient, private router: Router, private serviceUtils: ServiceUtils) {

  }

  public getContracts() {
    return this.serviceUtils.ApiGET('contracts');
  }
}
