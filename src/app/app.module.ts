import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from "./material.module";
import { AppComponent } from './app.component';
import { ForgotpwdComponent } from './auth/forgotpwd/forgotpwd.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetpwdComponent } from './auth/resetpwd/resetpwd.component';
import { AuthService } from './services/auth/auth.service';
import { ErrpageComponent } from './pages/errpage/errpage.component';
import { ServiceUtils } from './services/serviceUtils';


@NgModule({
  declarations: [
    AppComponent,
    ForgotpwdComponent,
    LoginComponent,
    ResetpwdComponent,
    ErrpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,

    RouterModule.forRoot([
      { path: '', loadChildren: './pages/pages.module#PagesModule' },
      { path: 'login', component: LoginComponent },
      { path: 'forgotpassword', component: ForgotpwdComponent },
      // { path: 'resetpwd/:email/:token', component: ResetpwdComponent},
      { path: 'resetpwd', component: ResetpwdComponent },
      { path: '**', component: ErrpageComponent },

    ],
      { useHash: true }
    ),

  ],
  providers: [
    AuthService,
    ServiceUtils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
