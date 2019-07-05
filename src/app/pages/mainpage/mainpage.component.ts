import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    let loginStatus = this.auth.checkLogin();
    if(!loginStatus) this.router.navigate(['/login']);
  }

}
