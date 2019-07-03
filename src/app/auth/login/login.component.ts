import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'materialApp';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  inputFormControl = new FormControl('', [
    Validators.required,
  ]);
  pwdFormControl = new FormControl('', [
    Validators.required,
  ])
  constructor() { }

  ngOnInit() {
  }

}
