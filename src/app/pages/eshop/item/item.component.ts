import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../../../model/item.model';
import {EshopComponent} from '../eshop.component';
import {EshopService} from '../eshop.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() insideShop: Item ;
  @Output() toBasketItemEvent = new EventEmitter<Item>();

  constructor(private eshopService: EshopService) {
    this.insideShop = new Item('', '', 0.0, '');
  }

  ngOnInit(): void {
  }

  public addItemToBasket(item: Item): void {
    this.eshopService.addItem(item);
  }
}
