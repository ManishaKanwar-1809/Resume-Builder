import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

constructor(private http: HttpClient) {

   }
     public saveEducationDetails(reqBody?: any) {
    return this.http.post<{ data: any[] }>(`${environment.apiUrl}educationalDetails/saveEducation-details`, reqBody);
  }}
