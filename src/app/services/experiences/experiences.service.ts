import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
constructor(private http: HttpClient) {

   }
     public saveExperienceDetails(reqBody?: any) {
    return this.http.post<{ data: any[] }>(`${environment.apiUrl}experienceDetails/saveExperience-details`, reqBody);
  }
}
