import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
public certificationDetailsFormGroup: FormGroup;
  constructor() { 
    this.certificationDetailsFormGroup = new FormGroup({
      certificates: new FormArray([]),
       })
  }
  
  public certificatesFormGroup() {
    return new FormGroup({
      nameOfCertification: new FormControl("", [Validators.required]),
fromDate: new FormControl(""),
toDate: new FormControl("")
    })
  }
  get certificates() {
    return this.certificationDetailsFormGroup.get("certificates") as FormArray;
  }

  public addCertifications() {
  const certificationFormArray = this.certificationDetailsFormGroup.get("certificates") as FormArray;
certificationFormArray.push(this.certificatesFormGroup())
  }
  ngOnInit(): void {
alert("hello...")  }

public savePersonalDetails(event: any) {
  debugger
  for(const eachValue in this.certificationDetailsFormGroup.value) {
this.certificationDetailsFormGroup.value.eachValue = (this.certificationDetailsFormGroup.value.eachValue).trim();
  }
  console.log(this.certificationDetailsFormGroup.value.eachValue)
}
}
