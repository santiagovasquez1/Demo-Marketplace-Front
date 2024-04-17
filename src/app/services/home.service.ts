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
    const url = `${this.apiUrl}/create_user`;
    return this.http.post(url, body);
  }

  getRegions(): any {
    const url = `${this.apiUrl}/get_regions`;
    return this.http.get(url);
  }
  
  getCities(id: number): any {
    const url = `${this.apiUrl}/get_cities/${id}`;
    return this.http.get(url);
  }
}
