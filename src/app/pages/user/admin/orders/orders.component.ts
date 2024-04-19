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
  createAgent: any;

  pageEvent!: PageEvent;
  orderColumns: string[] = ['user_id', 'power', 'delivery', 'delivery_balance', 'action'];
  users: any;
  orders = [{
    user_id: 'ISAGEN',
    power: "1",
    delivery: "1"
  }];

  constructor(private adminService: AdminService){

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

  ngOnInit(): void {
    /** Busqueda de agentes en la base de datos */
      this.adminService.getUsers()
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

  handleModal() {
    this.modal = true
  }

  onSubmit() {
    
  }
}
