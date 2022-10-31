import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { HttpClientModule } from "@angular/common/http";
import { ResultscreenComponent } from './resultscreen/resultscreen.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    QuestionScreenComponent,
    ResultscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
