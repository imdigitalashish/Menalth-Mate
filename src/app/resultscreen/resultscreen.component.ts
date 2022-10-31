import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-resultscreen',
  templateUrl: './resultscreen.component.html',
  styleUrls: ['./resultscreen.component.css']
})
export class ResultscreenComponent implements OnInit {

  constructor(public applicationService: ApplicationService) { }

  ngOnInit(): void {
  }

}
