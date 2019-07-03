import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatIconModule } from '@angular/material';
// import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from "./material.module";


// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotpwdComponent } from './auth/forgotpwd/forgotpwd.component';
// import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetpwdComponent } from './auth/resetpwd/resetpwd.component';
import { AuthService } from './services/auth/auth.service';
import { ErrpageComponent } from './pages/errpage/errpage.component';



@NgModule({
  declarations: [
    AppComponent,
    ForgotpwdComponent,
    // MainpageComponent,
    LoginComponent,
    ResetpwdComponent,
    ErrpageComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatInputModule, MatButtonModule, 
    MaterialModule,
    FlexLayoutModule,

    RouterModule.forRoot([
      { path: '', loadChildren: './pages/pages.module#PagesModule'},
      // { path: '', component: LoginComponent},
      { path: 'login', component: LoginComponent },
      { path: 'forgotpassword', component:ForgotpwdComponent},
      // { path: 'resetpwd/:email/:token', component: ResetpwdComponent},
      { path: 'resetpwd', component: ResetpwdComponent},
      // { path: 'nav', component: NavbarComponent },
      { path: '**', component: ErrpageComponent},
     
    ],
    {useHash: true}
    ),
    // RecaptchaModule.forRoot({
    //   siteKey: '6LfJOZMUAAAAAIYUWx2cwCNOWCQm9ROf8YLhJwj8',

    // }),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
