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
  

  pageEvent!: PageEvent;
  userColumns: string[] = ['company_name', 'contact', 'location', 'email', 'agent_type', 'agent_type2','agent_type3', 'agent_type4', 'status', 'actions'];
  orderColumns: string[] = ['user_id', 'power', 'delivery', 'delivery_balance', 'action'];
  users: any;
  orders = [{
    user_id: 'ISAGEN',
    power: "1",
    delivery: "1"
  }];


  constructor(private homeService: HomeService){
  }

  ngOnInit(): void {
    /** Busqueda de agentes en la base de datos */
      this.homeService.getAgents()
      .subscribe({
        next: (response: any) => {
          console.log(response)
        },
        error : (error: any) => {
          console.error(error);
        }});
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    console.log(this.pageIndex)
  }

}
