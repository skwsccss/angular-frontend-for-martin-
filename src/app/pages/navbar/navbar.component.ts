import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }
  openBottomSheet(): void {
    this._bottomSheet.open(ChangePassword);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'change-password',
  templateUrl: 'change-password.html',
})

export class ChangePassword {
  constructor(private _bottomSheetRef:
    MatBottomSheetRef<ChangePassword>){}

    changepwd(){
      console.log("changed pwd!");
      // this._bottomSheetRef.dismiss();

    }

}