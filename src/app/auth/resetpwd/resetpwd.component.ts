import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validator, ValidatorFn, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss']
})
export class ResetpwdComponent implements OnInit {
  pwdFormControl = new FormControl('', [
    Validators.required,
      ]);
  constructor() { }

  ngOnInit() {
  }

  reset(){
    console.log('password is reseted');
  }

}
