import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
public skillsFormGroup: FormGroup;
  constructor() { 
    this.skillsFormGroup = new FormGroup({
      skillsArray: new FormArray([]),
       })
  }
  
  public skillsFG() {
    return new FormGroup({
      nameOfSkill: new FormControl("", [Validators.required]),
fromDate: new FormControl(""),
toDate: new FormControl("")
    })
  }
  get skills() {
    return this.skillsFormGroup.get("skillsArray") as FormArray;
  }

  public addskills() {
  const skillFormArray = this.skillsFormGroup.get("skillsArray") as FormArray;
skillFormArray.push(this.skillsFG())
  }
  ngOnInit(): void {
alert("hello...")  }

public savePersonalDetails(event: any) {
  debugger
  for(const eachValue in this.skillsFormGroup.value) {
this.skillsFormGroup.value.eachValue = (this.skillsFormGroup.value.eachValue).trim();
  }
  console.log(this.skillsFormGroup.value.eachValue)
}
}
