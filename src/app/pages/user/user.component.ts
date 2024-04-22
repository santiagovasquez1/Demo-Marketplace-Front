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
  generator = true;

  constructor(private router: Router){

  }

}
