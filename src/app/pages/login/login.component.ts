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
    console.log(this.userInfo.value.password + environment.secret)
    let data = {
      ...this.userInfo.value,
      password: this.userInfo.value.password
    }
    console.log(data)
  }


}
