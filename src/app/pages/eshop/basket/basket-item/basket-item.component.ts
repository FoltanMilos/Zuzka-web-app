import {Component, Input, OnInit} from '@angular/core';
import {BasketItem} from '../../../../model/basketItem.model';
import {Item} from '../../../../model/item.model';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {
  @Input() basketItem: BasketItem;

  constructor() {
    this.basketItem =  new BasketItem(new Item(1, '', '',
      -1.00, ''), 1, '');
  }

  ngOnInit(): void {
  }

  public addQuantity(quant: number): void {
    if (this.basketItem.quantity === 1 && quant === -1) {
      // nerob nic
      console.log('Quantity cannot be lower');
    } else {
      this.basketItem.quantity += quant;
      console.log('Quant: ' + this.basketItem.quantity);
    }
  }

  public lowerButtonDisabled(): boolean {
    return this.basketItem.quantity === 1;
  }

  public summaryPerQuantity(): number {
    return this.basketItem.quantity * this.basketItem.item.price;
  }

}
