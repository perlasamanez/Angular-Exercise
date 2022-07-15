import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-how-it-works',
  templateUrl: './landing-how-it-works.component.html',
  styleUrls: ['./landing-how-it-works.component.css']
})
export class LandingHowItWorksComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  steps: any = [];
  stepsInformation: any = [];

  ngOnInit(): void {
    this.getSteps();
  }

  getSteps() {
    const url='https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';
    this._http.get(url).subscribe(
      (response) => {
        this.steps = response;
        this.steps.sort(function(a: any, b: any) { return a.stepNumber - b.stepNumber });
        this.getLatestModifiedStepsInformation();
      }
    );
  }

  getLatestModifiedStepsInformation() {
    this.steps.forEach((step: any) => {
      this.stepsInformation.push(step.versionContent.reduce((a: any, b: any) => (a.effectiveDate > b.effectiveDate ? a : b)));
    });
  }
}
