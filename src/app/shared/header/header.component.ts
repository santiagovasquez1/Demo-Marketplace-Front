import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  @Input() name: string;

  constructor() {
    this.name = '';
   }

   removeToken() {
    localStorage.removeItem("chainToken");
   }

  ngOnInit(): void {
  }

}
