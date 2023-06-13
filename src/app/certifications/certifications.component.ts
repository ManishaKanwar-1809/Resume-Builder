import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CertificatesService } from '../services/certificates/certificates.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
public certificationDetailsFormGroup: FormGroup;
  constructor(private certificationDetailServices: CertificatesService) { 
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
    debugger
  const certificationFormArray = this.certificationDetailsFormGroup.get("certificates") as FormArray;
certificationFormArray.push(this.certificatesFormGroup())
  }
  ngOnInit(): void {
  }

  public handleCertificateName(event: any, index: number){
    console.log(event.target.value);
    this.certificationDetailsFormGroup.get("certificates")?.get(index.toString())?.patchValue({
     nameOfCertification: event.target.value 
    })
    
  }
public saveCertificationDetails(event: any) {
  debugger
  if(this.certificationDetailsFormGroup.valid) {
    const data = this.certificationDetailsFormGroup.getRawValue();
this.certificationDetailServices.saveCertificationDetails(data).subscribe(
  (data: any) => {
      alert("Data Saved Successfully");
  }, 
  (error: any) => {
      alert("Something went wrong");

  }
)
  }
//   for(const eachValue in this.certificationDetailsFormGroup.value) {
// this.certificationDetailsFormGroup.value.eachValue = (this.certificationDetailsFormGroup.value.eachValue).trim();
//   }
//   console.log(this.certificationDetailsFormGroup.value.eachValue)
}
}
