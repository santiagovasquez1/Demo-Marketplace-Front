import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = environment.enerchain_back_url;

  constructor(private http: HttpClient) { }

  sendAgentData(body: any): any {
    const url = `${this.apiUrl}/manage_users/get_project_users`;
    return this.http.post(url, body);
  }
}
