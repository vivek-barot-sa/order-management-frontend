import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purveyor-dashboard',
  templateUrl: './purveyor-dashboard.component.html',
  styleUrls: ['./purveyor-dashboard.component.css']
})
export class PurveyorDashboardComponent implements OnInit {

  purveyorName = localStorage.getItem('fname');

  constructor() { }

  ngOnInit() {
  }

}
