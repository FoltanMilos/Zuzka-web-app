import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-delivery',
  templateUrl: './basket-delivery.component.html',
  styleUrls: ['./basket-delivery.component.scss']
})
export class BasketDeliveryComponent implements OnInit {
  first = '';
  second = '';
  constructor() { }

  ngOnInit(): void {
  }

}
