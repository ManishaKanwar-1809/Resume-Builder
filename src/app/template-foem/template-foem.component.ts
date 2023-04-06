import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-foem',
  templateUrl: './template-foem.component.html',
  styleUrls: ['./template-foem.component.css']
})
export class TemplateFoemComponent implements OnInit {
public templates: any[];
  constructor() { 
    this.templates = [
      {id:1, image:"src/public/templates/resume_template1.png"},
      {id:1, image:"src/public/templates/resume_template2.png"},
      {id:1, image:"src/public/templates/resume_template3.png"},
      {id:1, image:"src/public/templates/resume_template4.png"},
      {id:1, image:"src/public/templates/resume_template5.png"},
    ]
   
  }
  
  ngOnInit(): void {
  }

public savePersonalDetails(event: any) {
//   debugger
//   for(const eachValue in this.personalDetailsFormGroup.value) {
// this.personalDetailsFormGroup.value.eachValue = (this.personalDetailsFormGroup.value.eachValue).trim();
//   }
//   console.log(this.personalDetailsFormGroup.value.eachValue)
}

}
