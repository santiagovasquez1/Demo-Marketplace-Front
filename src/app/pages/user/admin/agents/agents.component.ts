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

  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  loading: boolean = true;

  param: string;
  pageEvent!: PageEvent;
  userColumns: string[] = ['company_name', 'contact', 'location', 'email', 'agent_name', 'status', 'actions'];
  orderColumns: string[] = ['user_id', 'power', 'delivery', 'delivery_balance', 'action'];
  users: any;
  orders = [{
    user_id: 'ISAGEN',
    power: "1",
    delivery: "1"
  }];

  constructor(
    private route: ActivatedRoute,
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
          this.loading = false;
          this.length = response.length;
          /** Validación para mostrar solo los usuarios generadores */
          this.users = response.filter((u:any) => u.agent_name === "Generador").map((u:any) => {
            return {
              user_id: u.user_id,
              company_name: u.company_name,
              contact: u.contact,
              location: `${u.regions}, ${u.cities}`, 
              email: u.email,
              agent_name: u.agent_name,
              status: u.status === 0  ? "Pendiente" : u.status === 1 ? "Aprobado" : "Rechazado",
              active: u.status
            }
          } )
        },
        error : (error: any) => {
          this.loading = false;
          console.error(error);
        }});


  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }


  getUsers(){
    this.loading = true;
        /** Busqueda de agentes en la base de datos */
        this.adminService.getUsers()
        .subscribe({
          next: (response: any) => {
            this.loading = false;
            this.users = response.map((u:any) => {
              return {
                user_id: u.user_id,
                company_name: u.company_name,
                contact: u.contact,
                location: `${u.regions}, ${u.cities}`,
                email: u.email,
                agent_name: u.agent_name,
                status: u.status === 0  ? "Pendiente" : u.status === 1 ? "Aprobado" : "Rechazado",
                active: u.status
              }
            } )
          },
          error : (error: any) => {
            this.loading = false;
            console.error(error);
          }});
  }

  updateUserStatusActive(id:number):any {

    let requestBody = {
        user_id: id,
        status: 1
    }

    this.loading = true;

    this.adminService.updateUserStatus(requestBody)
    .subscribe({
      next: (response: any) => {
        this.getUsers();
      },
      error : (error: any) => {
        this.loading = false;
        console.error(error);
      }});
  }

  updateUserStatusRejected(id:number):any {

    let requestBody = { 
      
        user_id: id,
        status: 2
      
  }

    this.loading = true;

    this.adminService.updateUserStatus(requestBody)
    .subscribe({
      next: (response: any) => {
        this.getUsers()
      },
      error : (error: any) => {
        this.loading = false;
        console.error(error);
      }});
  }

  disabledButton(status: number){

    return status >= 1 ? true : false;
  }
  
}
