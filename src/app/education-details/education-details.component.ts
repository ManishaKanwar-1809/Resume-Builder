import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationService } from '../services/education/education.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {
public educationDetailsFormGroup: FormGroup;
  constructor( private educationDetailServices: EducationService) { 
    this.educationDetailsFormGroup = new FormGroup({
      highSchool: new FormGroup({
        schoolName: new FormControl("", [Validators.required]),
        fromDate:new FormControl("", [Validators.required]),
        toDate: new FormControl("", [Validators.required]),
        percentage: new FormControl("")
      }),
      
  
       higherSecondary: new FormGroup({
        schoolName: new FormControl(""),
        fromDate:new FormControl(""),
        toDate: new FormControl(""),
        percentage: new FormControl("")
      }),
      //  diploma: new FormArray([]),
       graduation: new FormGroup({
        collegeName: new FormControl("",[Validators.required]),
        courseTitle: new FormControl("", [Validators.required]),
        fromDate:new FormControl("", [Validators.required]),
        toDate: new FormControl("", [Validators.required]),
        percentage: new FormControl("")
      }),
       postGraduation: new FormGroup({
       collegeName: new FormControl("",[Validators.required]),
        courseTitle: new FormControl("", [Validators.required]),
        fromDate:new FormControl("", [Validators.required]),
        toDate: new FormControl("", [Validators.required]),
        percentage: new FormControl("")
      }),
     

    })

  }
  get higherSecondaryFormGroup() {
    return this.educationDetailsFormGroup.get('higherSecondary') as FormGroup;

  }
  
    get highSchoolFormGroup() {
    return this.educationDetailsFormGroup.get('highSchool') as FormGroup;

  }
    get graduationFormGroup() {
    return this.educationDetailsFormGroup.get('graduation') as FormGroup;

  }

    get postGraduationFormGroup() {
    return this.educationDetailsFormGroup.get('postGraduation') as FormGroup;

  }
  // public diplomaFormGroup(){
  //   return new FormGroup({
  //       instituteName: new FormControl("",[Validators.required]),
  //       courseTitle: new FormControl("", [Validators.required]),
  //       fromDate:new FormControl("", [Validators.required]),
  //       toDate: new FormControl("", [Validators.required]),
  //       percentage: new FormControl("")
  //     })
  // }
  ngOnInit(): void {
  }

public saveEducationDetails(event: any) {
  debugger
  if(this.educationDetailsFormGroup.valid) {
    const data = this.educationDetailsFormGroup.getRawValue();
this.educationDetailServices.saveEducationDetails(data).subscribe(
  (data: any) => {
      alert("Data Saved Successfully");
  }, 
  (error: any) => {
      alert("Something went wrong");

  }
)
  }
//   for(const eachValue in this.educationDetailsFormGroup.value) {
// this.educationDetailsFormGroup.value.eachValue = (this.educationDetailsFormGroup.value.eachValue).trim();
//   }
//   console.log(this.educationDetailsFormGroup.value.eachValue)
}
}
