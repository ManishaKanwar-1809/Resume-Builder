import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
public projectDetailsFormGroup: FormGroup;
  constructor() { 
    this.projectDetailsFormGroup = new FormGroup({
      projects: new FormArray([]),
       })
  }
  
  public projectsFormGroup() {
    return new FormGroup({
      nameOfProject: new FormControl("", [Validators.required]),
fromDate: new FormControl(""),
toDate: new FormControl("")
    })
  }
  get projects() {
    return this.projectDetailsFormGroup.get("projects") as FormArray;
  }

  public addProjects() {
  const projectFormArray = this.projectDetailsFormGroup.get("projects") as FormArray;
projectFormArray.push(this.projectsFormGroup())
  }
  
  ngOnInit(): void {
alert("hello...")  }

public savePersonalDetails(event: any) {
  debugger
  for(const eachValue in this.projectDetailsFormGroup.value) {
this.projectDetailsFormGroup.value.eachValue = (this.projectDetailsFormGroup.value.eachValue).trim();
  }
  console.log(this.projectDetailsFormGroup.value.eachValue)
}
}
