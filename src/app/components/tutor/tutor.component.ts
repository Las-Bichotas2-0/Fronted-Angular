import { Component, OnInit, ViewChild } from '@angular/core';
import { Tutor } from  '../../core/models/tutor';
import { UserApiService } from "../../core/services/user-api.service";
import { Router, ActivatedRoute } from '@angular/router';
//import * as _ from 'lodash';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  tutorId!: number;
  tutorData: Tutor = {} as Tutor;
  defaultTutor: Tutor = { id: 0, name: '', topics: [], languages: []};

  constructor(private usersApi: UserApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tutorId = Number(this.route.params.subscribe( params => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.retrieveStudent(id);
        this.isEditMode = true;
        return id;
      } else {
        this.resetStudent();
        this.isEditMode = false;
        return 0;
      }
    }));
  }
  navigateToTutors(): void {
    this.router.navigate(['/tutors'])
      .then(() => console.log(this.route.url) );
  }

  resetTutor(): void {
    this.tutorData = this.defaultTutor;
  }
  
  retrieveStudent(id: number): void {
    this.studentsApi.getStudentById(id)
      .subscribe((response: Student) => {
        this.studentData = {} as Student;
        this.studentData = _.cloneDeep(response);
        console.log(response);
        console.log(this.studentData);
      });
  }

}
