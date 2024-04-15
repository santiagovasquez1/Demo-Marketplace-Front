import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  selectedItem: string | null = null;

  selectItem(itemTitle: string) {
    this.selectedItem = itemTitle;
  }
}
