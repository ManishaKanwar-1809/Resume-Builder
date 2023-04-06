import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {
public experienceFormGroup: FormGroup;
  constructor() { 
    this.experienceFormGroup = new FormGroup({
      companyName: new FormControl(""),
      jobTitle: new FormControl(""),
      designation: new FormControl(""),
      fromDate: new FormControl(""),
      toDate: new FormControl(""),
      responsibilitiesAndAchievements: new FormControl("")

    })
  }
  
  ngOnInit(): void {
alert("hello...")  }

public savePersonalDetails(event: any) {
  debugger
  for(const eachValue in this.experienceFormGroup.value) {
this.experienceFormGroup.value.eachValue = (this.experienceFormGroup.value.eachValue).trim();
  }
  console.log(this.experienceFormGroup.value.eachValue)
}
}
