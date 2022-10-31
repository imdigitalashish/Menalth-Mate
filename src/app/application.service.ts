import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {


  scoreValue = 0;

  flipbookAudio = new Audio();



  constructor(private httpClient: HttpClient) {

    this.flipbookAudio.src = "../assets/music/background.mp3";

    fromEvent(this.flipbookAudio, "enabled").subscribe(() => {
      this.flipbookAudio.play();
    })
  }


  // constructor() {


  // }

  returnListOfQuestions() {
    return this.httpClient.get("/assets/listOfQuestions.json")
  }


}
