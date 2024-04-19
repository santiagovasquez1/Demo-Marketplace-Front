import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  apiUrl = environment.enerchain_back_url;

  constructor(private http: HttpClient) { }

  sendAgentData(body: any): any {
    const url = `${this.apiUrl}/users`;
    return this.http.post(url, body);
  }

  getAgents(): any {
    const url = `${this.apiUrl}/get_agents`;
    return this.http.get(url);
  }

  getRegions(): any {
    const url = `${this.apiUrl}/regions`;
    return this.http.get(url);
  }

  getCities(): any {
    const url = `${this.apiUrl}/cities`;
    return this.http.get(url);
  }
  
}
