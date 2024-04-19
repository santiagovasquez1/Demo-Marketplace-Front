import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.sass'
})
export class AuthComponent {
  userInfo!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService : LoginService,
    private router: Router
  ){
      this.userInfo = new FormGroup({
        email: new FormControl(""),
        password: new FormControl("")
    });
  }

  onSubmit(): void {

    let data = {
      username: this.userInfo.value.email,
      password: this.userInfo.value.password
    }

    const formData = new URLSearchParams();
        formData.append("username", `${this.userInfo.value.email}`);
        formData.append("password", `${this.userInfo.value.password}`);
        
    this.loginService.login(formData)
    .subscribe({
      next: (response: any) => {
        if(response.access_token) {
          localStorage.setItem("chainToken", response.access_token)
          this.router.navigate(["/admin/agent"]);
        }
      },
      error : (error: any) => {
        console.error(error);
      }});
  }
}
