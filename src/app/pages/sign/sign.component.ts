import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SignService } from '../../services/sign.service';
import { SHA256 } from "crypto-js"
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.sass'
})
export class SignComponent implements OnInit {

  loading: boolean = true;
  createAgent!: FormGroup;
  agent_types: any;

  regions: any;
  cities: any;
  cities_by_region: any;
  
  ngOnInit(): void {

    console.log("Starting sign-up component")

    /** Asignar lista de agentes disponibles */
    this.signService.getAgents()
    .subscribe({
      next: (response: any) => {
        
        /** Filtro de tipos de agente diferentes al administrador */
        this.agent_types = response.filter((agent:any) => agent.agent_id != 5);

        /** Asignar regiones disponible */
      this.signService.getRegions()
      .subscribe({
        next: (response: any) => {
          this.regions = response
          this.loading = false;

          /** Asignar ciudades disponibles de la región */
        this.signService.getCities()
        .subscribe({
          next: (response: any) => {
            /** Condición inicial para la región del Amazonas */
            let cities_by_region = response.filter((c: any) => parseInt(c.region_id) === 1)
            this.cities = response;
            this.cities_by_region = cities_by_region;
          },
          error : (error: any) => {
            this.loading = false;
            console.error(error);
          }});

        },
        error : (error: any) => {
          this.loading = false;
          console.error(error);
        }});

      },
      error : (error: any) => {
        console.error(error);
      }});

  }

  constructor(
    private signService : SignService,
    private router: Router
  ){
      this.createAgent = new FormGroup({
        agent_id: new FormControl(1),
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
    this.loading = true;
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
      password: this.createAgent.value.password
    } 

      this.signService.sendAgentData(formData)
      .subscribe({
        next: (response: any) => {
          if(response) {
            this.loading = false;
            this.router.navigate(["/login"])
            console.log(response)
          }
        },
        error : (error: any) => {
          this.loading = false;
          console.error(error);
        }});
    }

    onChangeRegion(event: any) {
      /** Asignación de ciudades respecto a la región */
      const selected_region_id = event.target.value;
      this.cities_by_region = this.cities.filter((c: any) => parseInt(c.region_id) === parseInt(selected_region_id));
    }

}
