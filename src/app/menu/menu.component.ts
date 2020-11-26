import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private isMenuBarCollapsed: boolean;

  constructor() {
    this.isMenuBarCollapsed = true;
  }

  ngOnInit(): void {
  }

  // collapse() {
  //   this.isMenuBarCollapsed = !this.isMenuBarCollapsed;
  // }

}
