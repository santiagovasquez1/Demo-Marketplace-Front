import { Component, OnInit} from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.sass'
})
export class OrdersComponent  implements OnInit{

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  modal = false;
  delivery: any;

  generatorName: string;
  deliveryValue: number;

  pageEvent!: PageEvent;
  orderColumns: string[] = ['user_id', 'power', 'delivery', 'delivery_balance', 'action'];
  users: any;
  orders = [{
    user_id: 'ISAGEN',
    power: "1",
    delivery: "1"
  }];

  constructor(private adminService: AdminService){

    this.delivery = new FormGroup({
      delivery: new FormControl(0)
  });

    this.generatorName = "";
    this.deliveryValue = 0;

  }

  ngOnInit(): void {
    /** Busqueda de agentes en la base de datos */
      this.adminService.getUsers()
      .subscribe({
        next: (response: any) => {
        },
        error : (error: any) => {
          console.error(error);
        }});
    };

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  handleModal(generatorName: string) {

    this.modal = true
    this.generatorName = generatorName;
    this.deliveryValue = this.delivery.value.delivery

  }

  onSubmit() {
    
  }
}
