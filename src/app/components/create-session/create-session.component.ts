import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TopicsApiService} from "../../core/services/topics-api.service";
import {LanguagesApiService} from "../../core/services/languages-api.service";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  selectedTopic: string | undefined;
  selectedLanguage: string | undefined;
  topics: any[] = [];
  languages: any[] = [];

  constructor(private router: Router, private topicsApi: TopicsApiService, private languageApi: LanguagesApiService) {
    this.topics = [];
    this.languages = [];
  }

  ngOnInit(): void {
    this.getAllTopics();
    this.getAllLanguages();
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




}
