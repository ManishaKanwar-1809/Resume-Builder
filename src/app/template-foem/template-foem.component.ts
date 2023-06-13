import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPersonalDetailsInterface } from '../interfaces/personalDetails.interface';
import { CommonService } from '../services/common-services/common.service';

@Component({
  selector: 'app-template-foem',
  templateUrl: './template-foem.component.html',
  styleUrls: ['./template-foem.component.css']
})
export class TemplateFoemComponent implements OnInit {
public templates: any[];
 public personalDetails: any;
  constructor(private router: Router, private commonServices: CommonService) { 
    this.templates = [
      {id:1, image:"../../assets/images/resume_template1.png"},
      {id:2, image:"../../assets/images/resume_template2.png"},
      {id:3, image:"../../assets/images/resume_template3.png"},
      {id:4, image:"../../assets/images/resume_template4.png"},
      {id:5, image:"../../assets/images/resume_template5.png"},
    ];
    this.personalDetails = {};
   
  }
  
  ngOnInit(): void {
  }

 public async selectTemlate(selectedTemplate: any, index: number) {
   debugger
   let indexOfSelectedImage = index + 1;
const templateObj = this.templates.find(temObj=> temObj.id === indexOfSelectedImage);
if(templateObj) {
  this.personalDetails = await this.commonServices.getProjectsDetails().subscribe((data)=> {
return data;
  }, (error) => {
    console.log(error)
  });
  console.log(this.personalDetails);
  
  // window.open(templateObj.image)
// this.router.navigate(templateObj.image)
}
  }

public generateResume(event: any) {
//   debugger
//   for(const eachValue in this.personalDetailsFormGroup.value) {
// this.personalDetailsFormGroup.value.eachValue = (this.personalDetailsFormGroup.value.eachValue).trim();
//   }
//   console.log(this.personalDetailsFormGroup.value.eachValue)
}

}
