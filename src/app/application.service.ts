import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient: HttpClient) { }


  returnListOfQuestions() {
    return this.httpClient.get("/assets/listOfQuestions.json")
  }


}
