import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, private auth: AuthService) { }
  openBottomSheet(): void {
    this._bottomSheet.open(ChangePassword);
  }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}

@Component({
  selector: 'change-password',
  templateUrl: 'change-password.html',
})

export class ChangePassword {
  constructor(private _bottomSheetRef:
    MatBottomSheetRef<ChangePassword>) { }

  changepwd() {
    console.log("changed pwd!");
    // this._bottomSheetRef.dismiss();

  }

  
}