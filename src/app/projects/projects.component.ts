import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
public projectDetailsFormGroup: FormGroup;
  constructor(private projectDetailServices: ProjectsService) { 
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
  }

public saveProjectDetails(event: any) {
  debugger
  if(this.projectDetailsFormGroup.valid) {
    const data = this.projectDetailsFormGroup.getRawValue();
this.projectDetailServices.saveProjectsDetails(data).subscribe(
  (data: any) => {
      alert("Data Saved Successfully");
  }, 
  (error: any) => {
      alert("Something went wrong");

  }
)
  }
//   for(const eachValue in this.projectDetailsFormGroup.value) {
// this.projectDetailsFormGroup.value.eachValue = (this.projectDetailsFormGroup.value.eachValue).trim();
//   }
//   console.log(this.projectDetailsFormGroup.value.eachValue)
}
}
