import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';

const routes: Routes = [
  { path: "", component: LandingScreenComponent, data: { animation: "mainPage" } },
  { path: "questionScreen", component: QuestionScreenComponent, data: { animation: "questionPage" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
