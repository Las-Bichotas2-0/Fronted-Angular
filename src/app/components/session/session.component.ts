import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogSessionComponent} from './dialog-session/dialog-session.component';
import {SessionApiService} from "../../core/services/session-api.service";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit{

  sessions : any[] = [];

  constructor(public dialog: MatDialog, private sessionApi: SessionApiService) {
    this.sessions = []
  }
  openDialog(){
    this.dialog.open(DialogSessionComponent);
  }

  getAllSessions(): void{
    this.sessionApi.getAllSessions().then((response: any) =>{
      for(let i = 0; i<response.content.length; i++){
        this.sessions.push(response.content[i]);
      }
      console.log(this.sessions);
    })
  }

  ngOnInit(): void {
    this.getAllSessions()
  }
}
