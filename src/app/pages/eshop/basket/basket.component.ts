import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BasketItem} from '../../../model/basketItem.model';
import {EshopService} from '../eshop.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() listBasketItems: Array<BasketItem> = [];
  level = 1;
  maxLevel = 1;


  constructor(private eshopService: EshopService) {
  }

  ngOnInit(): void {
    this.listBasketItems = this.eshopService.listBasketItems;
  }

  setLever(parameter: number): void {
    if (this.level < parameter) {
      // toto je ok, mozeme sa posunut ak je o 1
      if (this.level + 1 === parameter) {
        this.level += 1;
        this.maxLevel += 1;
      }
      // else nic
    } else {
      // ak je mensie, tak s avracia naspat
      this.level = parameter;
      // do not downgrade max, its ok
    }
    console.log('LEVEL: ' + this.level);
    console.log('MAX-LEVEL: ' + this.maxLevel);
  }

}
