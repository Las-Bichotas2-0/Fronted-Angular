import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from  '../../core/models/user';
import { UserApiService } from "../../core/services/user-api.service";
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  tutorId!: number;
  tutorData: User = {} as User;
  defaultsTutor: User = { id: 0, name: '', topics: [], languages: []};

  constructor(private usersApi: UserApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tutorId = Number(this.route.params.subscribe( params => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.retrieveTutor(id);
        return id;
      } else {
        this.resetTutor();
        return 0;
      }
    }));
  }
  navigateToTutors(): void {
    this.router.navigate(['/tutors'])
      .then(() => console.log(this.route.url) );
  }

  resetTutor(): void {
    this.tutorData = this.defaultsTutor;
  }

  retrieveTutor(id: number): void {
    this.usersApi.getUserById(id)
      .subscribe((response: User) => {
        this.tutorData = {} as User;
        this.tutorData = _.cloneDeep(response);
        console.log(response);
        console.log(this.tutorData);
      });
  }

}
