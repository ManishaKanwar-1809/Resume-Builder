import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from '../services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
public skillsFormGroup: FormGroup;
  constructor(private skillsServices: SkillsService) { 
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
  }

public saveSkills(event: any) {
  debugger
  if(this.skillsFormGroup.valid) {
    const data = this.skillsFormGroup.getRawValue();
this.skillsServices.saveSkillsDetails(data).subscribe(
  (data: any) => {
      alert("Data Saved Successfully");
  }, 
  (error: any) => {
      alert("Something went wrong");

  }
)
  }
//   for(const eachValue in this.skillsFormGroup.value) {
// this.skillsFormGroup.value.eachValue = (this.skillsFormGroup.value.eachValue).trim();
//   }
//   console.log(this.skillsFormGroup.value.eachValue)
}
}
