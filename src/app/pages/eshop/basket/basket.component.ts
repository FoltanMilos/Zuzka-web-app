import {Component, Input, OnInit} from '@angular/core';
import {BasketItem} from '../../../model/basketItem.model';
import {EshopService} from '../eshop.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() listBasketItems: Array<BasketItem> = [];
  level = 4;

  constructor(private eshopService: EshopService) {
  }

  ngOnInit(): void {
    this.listBasketItems = this.eshopService.listBasketItems;
  }

  setLever(parameter: number): void {
    this.level = parameter;
  }

}
