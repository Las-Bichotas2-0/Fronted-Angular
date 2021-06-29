import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TopicsApiService} from "../../core/services/topics-api.service";
import {LanguagesApiService} from "../../core/services/languages-api.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionApiService} from "../../core/services/session-api.service";
import {SessionInput} from "../../core/models/inputs/session-input";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {


  loading: boolean = false;
  form: FormGroup;
  createNewSesion: boolean = false;
  topics: any[] = [];
  languages: any[] = [];
  newTopicNameValue: string | undefined;

  constructor(private fb: FormBuilder,private router: Router, private topicsApi: TopicsApiService, private languageApi: LanguagesApiService, private sessionApi: SessionApiService) {
    this.topics = [];
    this.languages = [];
    this.form = this.fb.group({
      newTopicName: '',
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
    this.loading = true;
    if(this.createNewSesion){
      // @ts-ignore
      this.createNewTopic(this.form.get('newTopicName').value);
      // @ts-ignore
      this.newTopicNameValue = this.form.get('newTopicName').value.name;
    }
    // @ts-ignore
    this.newTopicNameValue = this.form.get('topic').value;


    const newSessionFormat={
      // @ts-ignore
      endAt:this.form.get('endDate').value,
      // @ts-ignore
      startAt: this.form.get('initialDate').value,
      link: `www.zoom.com/${this.newTopicNameValue}`,
      state: 'active',
      topic: this.newTopicNameValue,
      // @ts-ignore
      information: this.form.get('info').value
    }

    this.sessionApi.addSession(newSessionFormat)
      .then((response) => {
        this.loading = false;
        console.log(response);
        this.router.navigate(['main']);
      })
      .catch((e) => {
        this.loading = false;
        console.log(e)
      });

  }



  createNewTopic(_name: string): void{
    const newTopicFormat = {name: _name}

    this.topicsApi.addSession(newTopicFormat).then(r => {
      console.log(r);
    })
      .catch((error)=> console.log(error));
  }









}
