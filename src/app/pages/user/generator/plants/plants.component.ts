import { Component } from '@angular/core';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.sass'
})
export class PlantsComponent {

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  pageEvent!: PageEvent;
  userColumns: string[] = ['company_name', 'contact', 'location', 'email', 'agent_type', 'status', 'actions'];
  orderColumns: string[] = ['user_id', 'power', 'delivery', 'delivery_balance', 'action'];
  users: any;
  orders = [{
    user_id: 'ISAGEN',
    power: "1",
    delivery: "1"
  }];


  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    console.log(this.pageIndex)
  }

}
