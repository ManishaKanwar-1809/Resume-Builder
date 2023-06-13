import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersonalDetailsInterface } from 'src/app/interfaces/personalDetails.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
constructor(private http: HttpClient) {
   }
       public getProjectsDetails(): Observable<any> {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}projectDetails/getProjects-details`);
  }

       public getPersonalDetails(): Observable<any> {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}personalDetails/getPersonal-details`);
  }

       public getSkillsDetails():Observable<any> {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}skills/getSkills-details`);
  }
     public getEducationDetails() {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}educationalDetails/getEducation-details`);
  }
       public getExperienceDetails() {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}experienceDetails/getExperience-details`);
  }
    public getCertificationDetails() {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}certificationDetails/getCertification-details`);
  }
}
