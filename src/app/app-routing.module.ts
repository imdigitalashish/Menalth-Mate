import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';

const routes: Routes = [
  { path: "", component: LandingScreenComponent },
  { path: "questionScreen", component: QuestionScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
