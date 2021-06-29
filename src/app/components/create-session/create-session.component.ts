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
    if(this.createNewSesion){
      // @ts-ignore
      this.createNewTopic(this.form.get('newTopicName').value);
      // @ts-ignore
      this.newTopicNameValue = this.form.get('newTopicName').value;
    }
    // @ts-ignore
    this.newTopicNameValue = this.form.get('topic').value;


    // @ts-ignore
    const endsNewTmp = this.form.get('endDate').value;
    // @ts-ignore
    const initialDateTmp = this.form.get('initialDate').value;
    const linkTmp = `www.zoom.com/${this.newTopicNameValue}`;
    const stateTmp = "active";
    const topicTmp = this.newTopicNameValue;
    // @ts-ignore
    const infoTmp = this.form.get('info').value;

    this.sessionApi.addSession({
      ed: endsNewTmp,
      idt: initialDateTmp,
      linkTmp,
      stateTmp,
      topicTmp,
      infoTmp
    })
      .then((response) => {
        console.log(response);
        this.router.navigate(['main']);
      })
      .catch((e) => console.log(e));

  }



  createNewTopic(_name: string): void{
    const newTopicFormat = {name: _name}
    this.loadingFunction();
    this.topicsApi.addSession(newTopicFormat).then(r => {
      console.log(r);
    })
      .catch((error)=> console.log(error));
  }


  loadingFunction(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000)
  }







}
