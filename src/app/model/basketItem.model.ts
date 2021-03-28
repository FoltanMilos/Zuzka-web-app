import {Item} from './item.model';

export class BasketItem {
  public item: Item | undefined;
  public quantity: number;
  public deliveryDate: string;

  constructor(item: Item | undefined , quantity: number, deliveryDate: string) {
    this.item = item;
    this.quantity = quantity;
    this.deliveryDate = deliveryDate;
  }
}
