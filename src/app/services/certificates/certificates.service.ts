import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

constructor(private http: HttpClient) {

   }
     public saveCertificationDetails(reqBody?: any) {
    return this.http.post<{ data: any[] }>(`${environment.apiUrl}certificationDetails/saveCertification-details`, reqBody);
  }
}
