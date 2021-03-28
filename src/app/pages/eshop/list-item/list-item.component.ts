import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../model/item.model';
import {EshopService} from '../eshop.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  providers: []
})
export class ListItemComponent implements OnInit {
  @Input() listShopItems: Array<Item> = [];

  constructor(private eshopService: EshopService) { }

  ngOnInit(): void {
  }
}
