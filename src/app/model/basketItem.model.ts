import {Item} from './item.model';

export class BasketItem {
  public item: Item;
  public quantity: number;
  public deliveryDate: string;
  // public descriptions: string[];

  constructor(item: Item, quantity: number, deliveryDate: string) {
    this.item = item;
    this.quantity = quantity;
    this.deliveryDate = deliveryDate;
    // this.descriptions = descriptions;
  }
}
