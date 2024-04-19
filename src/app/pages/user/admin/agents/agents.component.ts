import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.sass'
})
export class AgentsComponent implements OnInit{

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  param: string;
  pageEvent!: PageEvent;
  userColumns: string[] = ['company_name', 'contact', 'location', 'email', 'agent_type', 'status', 'actions'];
  orderColumns: string[] = ['user_id', 'power', 'delivery', 'delivery_balance', 'action'];
  users: any;
  orders = [{
    user_id: 'ISAGEN',
    power: "1",
    delivery: "1"
  }];

  constructor(private route: ActivatedRoute,
    private matDialog: MatDialog,
    private adminService: AdminService
  ) { 
    this.param = "";
  }

  ngOnInit(): void {

    /** Busqueda de agentes en la base de datos */
      this.adminService.getUsers()
      .subscribe({
        next: (response: any) => {
          this.users = response.map((u:any) => {
            return {
              company_name: u.company_name,
              contact: u.contact,
              location: "Antioquia", // TODO: Implementar el dato
              email: u.email,
              agent_type: u.agent_id,
              status: u.status
            }
          } )
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
