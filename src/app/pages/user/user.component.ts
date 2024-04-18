import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.sass'
})
export class UserComponent {

  panelOpenState = true;
  admin = false;
  user = false;

  constructor(private router: Router){

  }


  goBack() {
    console.log("Estoy en el go back")
    this.router.navigate(["/admin/agents"])
  }

  removeData() {

  }

}
