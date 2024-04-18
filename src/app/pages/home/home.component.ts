import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { SHA256 } from "crypto-js"
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {

  createAgent!: FormGroup;
  agent_types: any = [
    {
      id: "1",
      name: "Generador"
    },
    {
      id: "2",
      name: "Comercializador"
    },
    {
      id: "3",
      name: "Transportador"
    },
    {
      id: "4",
      name: "Distribuidor"
    }
]

  regions: any;
  cities: any;
  cities_by_region: any;
  
  ngOnInit(): void {

    console.log("Starting home component")

    /** Asignar lista de agentes disponibles */
    // this.homeService.getAgents()
    // .subscribe({
    //   next: (response: any) => {
    //     this.agent_types = response;
    //     console.log(response)
    //   },
    //   error : (error: any) => {
    //     console.error(error);
    //   }});

      /** Asignar regiones disponible */
      this.homeService.getRegions()
      .subscribe({
        next: (response: any) => {
          this.regions = response

          /** Asignar ciudades disponibles de la región */
        this.homeService.getCities()
        .subscribe({
          next: (response: any) => {
            /** Condición inicial para la región del Amazonas */
            let cities_by_region = response.filter((c: any) => parseInt(c.region_id) === 1)
            this.cities = response;
            this.cities_by_region = cities_by_region;
          },
          error : (error: any) => {
            console.error(error);
          }});

        },
        error : (error: any) => {
          console.error(error);
        }});

  }

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
      password: this.createAgent.value.password
    } 

      this.homeService.sendAgentData(formData)
      .subscribe({
        next: (response: any) => {
          console.log(response)
        },
        error : (error: any) => {
          console.error(error);
        }});
    }

    onChangeRegion(event: any) {
      /** Asignación de ciudades respecto a la región */
      const selected_region_id = event.target.value;
      this.cities_by_region = this.cities.filter((c: any) => parseInt(c.region_id) === parseInt(selected_region_id));
    }

}
