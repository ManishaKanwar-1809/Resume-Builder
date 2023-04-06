import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
public list: any[];
  constructor() { 
    this.list = [
      {
        id:1, name:"Personal Details", icon:"fa-solid fa-user", path: "personal-details"
      },
      {
        id:2, name:"Education",  icon:"fas fa-user-graduate", path: "eduation"
      },
      {
        id:3, name:"Experience Details",  icon:"fa-solid fa-person-walking-luggage", path: "experience-details"
      },
      {
        id:4, name:"Certification",  icon:"	fas fa-award", path: "certificates"
      },
      {
        id:5, name:"Skills",  icon:"fa-solid fa-pen-nib" , path: "skills"
      },
       {
        id:6, name:"Projects",  icon:"fas fa-project-diagram",  path: "projects-details"
      },
        {
        id:7, name:"Templates",  icon:"fa-solid fa-table", path: "templates"
      }
    ]
  }

  ngOnInit(): void {
  }

}
