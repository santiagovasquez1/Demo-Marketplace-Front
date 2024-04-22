import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.sass'
})
export class AuthComponent {

  userInfo!: FormGroup;
  loading: boolean = false;

  constructor(
    private loginService : LoginService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ){
      this.userInfo = new FormGroup({
        email: new FormControl(""),
        password: new FormControl("")
    });
  }

  onSubmit(): void {

    this.loading = true;

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
          this.loading = false;
          localStorage.setItem("chainToken", response.access_token)
          let token = this.jwtHelper.decodeToken(response.access_token)
          console.log(token.sub.agent_id)

          /** Condicionamiento de ruta inicial a redirigir */

          switch(token.sub.agent_id){
            case 5:
              this.router.navigate(["/admin/agent"])
              return
            case 1: 
              this.router.navigate(["/generator/plants"])
              return
            default:
              return 
          }
         
        }
      },
      error : (error: any) => {
        this.loading = false;
        console.error(error);
      }});
  }
}
