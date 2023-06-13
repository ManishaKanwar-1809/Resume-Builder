import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

constructor(private http: HttpClient) {

   }
     public saveSkillsDetails(reqBody?: any) {
    return this.http.post<{ data: any[] }>(`${environment.apiUrl}skills/saveSkills-details`, reqBody);
  }
}
