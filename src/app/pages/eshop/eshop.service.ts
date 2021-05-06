import {Injectable} from '@angular/core';
import {Item} from '../../model/item.model';
import {BasketItem} from '../../model/basketItem.model';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {product} from "../../model/product.model";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class EshopService {

  private url: string;

  listSaleItems: Array<Item> = [
    new Item(1, 'Milky Cleanser', 'Jemne cistiace mlieko pre normalnu a suchu plet',
      10.00, '/assets/eshop/kozmetika.jfif'),
    new Item(2, 'Medium Cleanser', 'Medium cistiace mlieko pre normalnu a suchu plet',
      15.00, '/assets/eshop/kozmetika.jfif'),
    new Item(3, 'Hard Cleanser', 'Hard cistiace mlieko pre normalnu a suchu plet',
      20.00, '/assets/eshop/kozmetika.jfif'),
  ];
  listSaleItems2: Array<Item> = [
    new Item(4, 'Hard Cleanser', 'Jemne cistiace mlieko pre normalnu a suchu plet',
      10.00, '/assets/eshop/kozmetika.jfif'),
    new Item(5, 'Medium Cleanser', 'Medium cistiace mlieko pre normalnu a suchu plet',
      15.00, '/assets/eshop/kozmetika.jfif'),
    new Item(6, 'Milky Cleanser', 'Hard cistiace mlieko pre normalnu a suchu plet',
      20.00, '/assets/eshop/kozmetika.jfif'),
  ];
  listBasketItems: Array<BasketItem> = [
    new BasketItem(new Item(1, 'Milky Cleanser', 'Jemne cistiace mlieko pre normalnu a suchu plet',
      10.00, '/assets/eshop/kozmetika.jfif'), 1, 'zajtra')
  ];
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:9999/test';
  }

  public getAll() {
    console.log('getting all via rest cal');
    return this.http.get<Item>(this.url);
  }

  public gg(): void {
    this.getAll().subscribe((data: Item)=> {
      console.log('Name:' + data.name);
      console.log(data.name);
      console.log(data.name);
      this.listBasketItems.push(new BasketItem(data,1,'ss'));
    });
  }

  public addItem(item: Item): void {
    const object = new BasketItem(item, 1, 'streda:2021');
    console.log('add item in eshop');
    this.gg();
    this.listBasketItems.push(object);
    // console.log(this.listBasketItems.length);
    // console.log(object);
  }

  public sumBasket(): number {
    let sums = 0.00;
    this.listBasketItems.forEach(value => {
      if (value !== undefined ) {
        // console.log('item ' + value?.item?.price);
        sums += value?.item?.price * value?.quantity;
        // console.log('final ' + sums);
      }
    });
    return sums;
  }
}
