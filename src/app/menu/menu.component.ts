import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  private isMenuBarCollapsed: boolean;
  public currentSelectedItem = '';

  constructor() {
    this.isMenuBarCollapsed = true;
    this.currentSelectedItem = 'Úvod';
  }

  ngOnInit(): void {
  }

  collapse(): void {
    this.isMenuBarCollapsed = !this.isMenuBarCollapsed;
    if (this.isMenuBarCollapsed) {
      // this.currentSelectedItem = 'Úvod';
    } else {
      // this.currentSelectedItem = '';
    }
  }

  selectItem(item: string): void {
    this.currentSelectedItem = item;
  }


}
