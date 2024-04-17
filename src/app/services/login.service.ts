import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = environment.enerchain_back_url;

  constructor(private http: HttpClient) { }

  getUser(data: any): any {
    const url = `${this.apiUrl}/get_user`;
    return this.http.post(url,data);
  }

}
