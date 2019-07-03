import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validator, ValidatorFn, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})

export class ForgotpwdComponent implements OnInit {

  forgotForm: FormGroup;
  token = '';
  email: string = '';
  error: string = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // this.forgotForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required])
    // });
  }

  submit(){
    if (this.email) {
      this.error = '';
      this.authService.forgotpassword(this.email).subscribe((res: any) =>{
        if (res.status) {
          this.router.navigate(['/resetpwd/' + this.email + '/' + res.token]);
        }
        else {
          this.error = res.message;
        }
      });
    }
    else {
      this.error = 'Input correct email address.';
    }
  }

}
