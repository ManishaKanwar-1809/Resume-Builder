import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

  constructor(private http: HttpClient) {

   }
     public savePersonalDetails(reqBody?: any) {
    return this.http.post<{ data: any[] }>(`${environment.apiUrl}personalDetails/savePersonal-details`, reqBody);
  }
}
