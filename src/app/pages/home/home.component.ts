import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HomeService } from '../../services/home.service';

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
        company: new FormControl(""),
        contact: new FormControl(""),
        phone: new FormControl(""),
        email: new FormControl(""),
        region: new FormControl("1"),
        city: new FormControl("1"),
        address: new FormControl(),
        password: new FormControl(""),
        password_confirm: new FormControl("")
    });
  }

  onSubmit(): void {
    
    let formData = {
      ...this.createAgent.value,
      agent_id : parseInt(this.createAgent.value.agent_id),
      region: parseInt(this.createAgent.value.region),
      city: parseInt(this.createAgent.value.city),
      status: 0
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
