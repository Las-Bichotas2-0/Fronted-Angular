import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TopicsApiService} from "../../core/services/topics-api.service";
import {LanguagesApiService} from "../../core/services/languages-api.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  form: FormGroup;
  createNewSesion: boolean = false;
  SelectedFinalDate: Date | undefined;
  selectedInitialDate: Date | undefined;
  selectedTopic: string | undefined;
  selectedLanguage: string | undefined;
  topics: any[] = [];
  languages: any[] = [];

  constructor(private fb: FormBuilder,private router: Router, private topicsApi: TopicsApiService, private languageApi: LanguagesApiService) {
    this.topics = [];
    this.languages = [];
    this.form = this.fb.group({
      topic: [[]],
      language: [[], Validators.required],
      initialDate: [Date, Validators.required],
      endDate: [Date, Validators.required],
      info: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.topics.push({
      id: 0,
      name: 'None'
    })
    this.getAllTopics();
    this.getAllLanguages();
    this.form.get('topic')?.valueChanges.subscribe(data =>  {
      console.log(data);
      if(data == 0){
        this.createNewSesion = true;
      }

      console.log(this.createNewSesion);
    })
  }


  getAllTopics(): void{
    this.topicsApi.getAllSessions()
      .then((response: any) =>{
        for(let i = 0; i < response.content.length; i++){
          this.topics.push(response.content[i]);
        }
        console.log(this.topics);
      })
      .catch((error)=>console.log(error))
  }

  getAllLanguages(): void{
    this.languageApi.getAllLanguages()
      .then((response: any) =>{
        for(let i = 0; i < response.content.length; i++){
          this.languages.push(response.content[i]);
        }
        console.log(this.languages);
      })
      .catch((e) => console.log(e));
  }


  createSession(): void{
    console.log(this.selectedInitialDate);
    console.log(this.createNewSesion);
  }







}
