import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperiencesService } from '../services/experiences/experiences.service';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {
public experienceFormGroup: FormGroup;
  constructor( private experienceDetailServices: ExperiencesService) { 
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
  }

public saveExperienceDetails(event: any) {
  debugger
  if(this.experienceFormGroup.valid) {
    const data = this.experienceFormGroup.getRawValue();
this.experienceDetailServices.saveExperienceDetails(data).subscribe(
  (data: any) => {
      alert("Data Saved Successfully");
  }, 
  (error: any) => {
      alert("Something went wrong");

  }
)
  }
//   for(const eachValue in this.experienceFormGroup.value) {
// this.experienceFormGroup.value.eachValue = (this.experienceFormGroup.value.eachValue).trim();
//   }
//   console.log(this.experienceFormGroup.value.eachValue)
}
}
