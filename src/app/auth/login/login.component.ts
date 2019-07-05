import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  token: string = '';
  errMsg: string = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  inputFormControl = new FormControl('', [
    Validators.required,
  ]);
  pwdFormControl = new FormControl('', [
    Validators.required,
  ]);

  public user: any;

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    if (this.pwdFormControl.errors || this.inputFormControl.errors) {
      return;
    }
    else {
      this._authService.login(this.inputFormControl.value, this.pwdFormControl.value).subscribe(
        (res: any) => {
          if (!res.token) {
            this.errMsg = res.error;
          } else {
            this.token = res.token;
            this.router.navigate(['/']);
          }
        },
        (err) => {
          if (err.error) {
            this.errMsg = err.error.error;
          } else {
            this.errMsg = 'Invalid credentials.';
          }
        }
      );
    }
  }
}
