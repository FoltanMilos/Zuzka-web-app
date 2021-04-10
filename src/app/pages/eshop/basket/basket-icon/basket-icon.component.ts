import { Component, OnInit } from '@angular/core';
import {EshopService} from '../../eshop.service';

@Component({
  selector: 'app-basket-icon',
  templateUrl: './basket-icon.component.html',
  styleUrls: ['./basket-icon.component.scss']
})
export class BasketIconComponent implements OnInit {

  constructor(private eshopService: EshopService) { }

  ngOnInit(): void {
  }

  public sumBasket(): number {
    const mm = this.eshopService.sumBasket();
    console.log('Ret: ' + mm);
    return mm;
  }

}
