import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalDetailsService } from '../services/personal-details/personal-details.service';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {
public personalDetailsFormGroup: FormGroup;
  constructor(private personalDetailServices: PersonalDetailsService) { 
    this.personalDetailsFormGroup = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      middleName: new FormControl(""),
      lastName: new FormControl("", [Validators.required]),
      mobileNo: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      linkedIn: new FormControl(""),
      github:  new FormControl(""),
      objective:  new FormControl(""),

    })
  }
  
  ngOnInit(): void {
  }

public savePersonalDetails(event: any) {
  debugger
  if(this.personalDetailsFormGroup.valid) {
    const data = this.personalDetailsFormGroup.getRawValue();
this.personalDetailServices.savePersonalDetails(data).subscribe(
  (data: any) => {
      alert("Data Saved Successfully");
  }, 
  (error: any) => {
      alert("Something went wrong");

  }
)
  }
//   for(const eachValue in this.personalDetailsFormGroup.value) {
// this.personalDetailsFormGroup.value.eachValue = (this.personalDetailsFormGroup.value.eachValue).trim();
//   }
//   console.log(this.personalDetailsFormGroup.value.eachValue)
}
}
