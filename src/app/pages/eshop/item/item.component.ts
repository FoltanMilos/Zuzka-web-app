import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // @Input() insideShop: { name: string; } ;
  @Input() insideShop: Item ;

  constructor() {
    this.insideShop = new Item('', '', 0.0, '');
  }

  ngOnInit(): void {
  }

}
