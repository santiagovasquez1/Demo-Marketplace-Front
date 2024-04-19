import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.enerchain_back_url;

  getUsers(): any {
    const url = `${this.apiUrl}/users`;
    return this.http.get(url);
  }

  updateUserStatus(data: any): any {
    const url = `${this.apiUrl}/update`;
    return this.http.put(url,data);
  }

}
