import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { passwordRenderer } from 'handsontable/renderers';
import { SHA256 } from "crypto-js"
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  userInfo!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService : LoginService
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
        console.log(response)
      },
      error : (error: any) => {
        console.error(error);
      }});
  }


}
