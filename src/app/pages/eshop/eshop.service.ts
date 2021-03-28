import {Injectable} from '@angular/core';
import {Item} from '../../model/item.model';
import {BasketItem} from '../../model/basketItem.model';
import {Subject} from 'rxjs';

@Injectable()
export class EshopService {

  listSaleItems: Array<Item> = [
    new Item('Milky Cleanser', 'Jemne cistiace mlieko pre normalnu a suchu plet',
      10.00, '/assets/eshop/kozmetika.jfif'),
    new Item('Medium Cleanser', 'Medium cistiace mlieko pre normalnu a suchu plet',
      15.00, '/assets/eshop/kozmetika.jfif'),
    new Item('Hard Cleanser', 'Hard cistiace mlieko pre normalnu a suchu plet',
      20.00, '/assets/eshop/kozmetika.jfif'),
  ];
  listBasketItems: Array<BasketItem> = [new BasketItem(new Item('TRest', 'Jemne cistiace mlieko pre normalnu a suchu plet',
    10.00, '/assets/eshop/kozmetika.jfif'), 1, 'streda:2021')];
  constructor() {
  }

  public addItem(item: Item): void {
    const object = new BasketItem(item, 1, 'streda:2021');
    console.log('add item in eshop');
    this.listBasketItems.push(object);
    console.log(this.listBasketItems.length);
    console.log(object);
  }
}
