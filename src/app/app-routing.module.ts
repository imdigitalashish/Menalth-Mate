import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { ResultscreenComponent } from './resultscreen/resultscreen.component';

const routes: Routes = [
  { path: "", component: LandingScreenComponent },
  { path: "questionScreen", component: QuestionScreenComponent },
  { path: "resultScreen", component: ResultscreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
