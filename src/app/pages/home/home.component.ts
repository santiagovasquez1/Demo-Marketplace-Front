import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { SHA256 } from "crypto-js"
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  createAgent!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private homeService : HomeService,
  ){
      this.createAgent = new FormGroup({
        agent_id: new FormControl("1"),
        NIT: new FormControl(""),
        company_name: new FormControl(""),
        contact: new FormControl(""),
        phone: new FormControl(""),
        email: new FormControl(""),
        region: new FormControl("1"),
        city: new FormControl("1"),
        address: new FormControl(""),
        password: new FormControl(""),
        password_validation: new FormControl("")
    });
  }

  onSubmit(): void {
    
    let formData = {
      status: 0,
      NIT: this.createAgent.value.NIT,
      company_name: this.createAgent.value.company_name,
      contact: this.createAgent.value.contact,
      phone: this.createAgent.value.phone,
      email: this.createAgent.value.email,
      region: parseInt(this.createAgent.value.region),
      city: parseInt(this.createAgent.value.city),
      agent_id : parseInt(this.createAgent.value.agent_id),
      address: this.createAgent.value.address,
      password: SHA256(this.createAgent.value.password + environment.secret).toString(),
    } 

    console.log(formData)
    if(false) {

      this.homeService.sendAgentData(formData)
      .subscribe({
        next: (response: any) => {
          console.log(response)
        },
        error : (error: any) => {
          console.error(error);
        }});
      }
  }

}
