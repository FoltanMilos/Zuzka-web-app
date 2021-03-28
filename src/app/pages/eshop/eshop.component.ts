import { Component, OnInit } from '@angular/core';
import {Item} from '../../model/item.model';
import {BasketItem} from '../../model/basketItem.model';
import {Router} from '@angular/router';
import {EshopService} from './eshop.service';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss']
})
export class EshopComponent implements OnInit {
  listSaleItems: Array<Item> = [];
  listSaleItems2: Array<Item> = [];
  listBasketItems: Array<BasketItem> = [];

  constructor(public router: Router, private eshopService: EshopService ) { }

  ngOnInit(): void {
    this.listSaleItems = this.eshopService.listSaleItems;
    this.listSaleItems2 = this.eshopService.listSaleItems2;
    this.listBasketItems = this.eshopService.listBasketItems;
  }

}
