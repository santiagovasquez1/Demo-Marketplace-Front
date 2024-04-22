import { Component, OnInit} from '@angular/core';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { HomeService } from '../../../../services/home.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.sass'
})
export class PlantsComponent implements OnInit{

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  createPlant: boolean = false;
  price: boolean = false;
  modal: boolean = false;
  inject: boolean = false;
  restart: boolean = false;
  

  pageEvent!: PageEvent;
  userColumns: string[] = ['name', 'location', 'coord', 'initial_date', 'co2', 'nominal_power','technology', 'energy_qty', 'status', 'actions'];
  orderColumns: string[] = ['user_id', 'power', 'delivery', 'delivery_balance', 'action'];
  users: any;
  orders = [{
    user_id: 'ISAGEN',
    power: "1",
    delivery: "1"
  }];


  constructor(private homeService: HomeService){
    this.users = [
      {
        name: "ISAGEN",
        location: "Guajira",
        coord: "Guajira",
        initial_date: "2015-02-20",
        co2: "24",
        nominal_power: "20",
        technology: "Solar",
        energy_qty: "2000",
        status: "Activa"
      }
    ]
  }

  ngOnInit(): void {

    /** Busqueda de agentes en la base de datos */
    
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

}
