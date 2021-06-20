import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogSessionComponent} from './dialog-session/dialog-session.component';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  
  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(DialogSessionComponent);
  }
}
