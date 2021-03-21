import { Component, OnInit } from '@angular/core';
import {Item} from '../../../model/item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  listSaleItems: Item[] = [
    new Item('Milky Cleanser', 'Jemne cistiace mlieko pre normalnu a suchu plet',
      10.00, '/assets/eshop/kozmetika.jfif'),
    new Item('Medium Cleanser', 'Medium cistiace mlieko pre normalnu a suchu plet',
      15.00, '/assets/eshop/kozmetika.jfif'),
    new Item('Hard Cleanser', 'Hard cistiace mlieko pre normalnu a suchu plet',
      20.00, '/assets/eshop/kozmetika.jfif'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
