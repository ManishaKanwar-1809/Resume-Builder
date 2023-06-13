import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

constructor(private http: HttpClient) {

   }
     public saveProjectsDetails(reqBody?: any) {
    return this.http.post<{ data: any[] }>(`${environment.apiUrl}projectDetails/saveProjects-details`, reqBody);
  }
}
