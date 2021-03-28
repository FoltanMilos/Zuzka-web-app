import {Component, Input, OnInit} from '@angular/core';
import {BasketItem} from '../../../../model/basketItem.model';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {
  @Input() basketItem: BasketItem | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }


}
