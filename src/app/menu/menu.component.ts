import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EshopService} from '../pages/eshop/eshop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  private isMenuBarCollapsed: boolean;
  private menuKeySlovakValue: Map<string, string> = new Map<string, string>();

  constructor(public router: Router,private eshopService: EshopService) {
    this.isMenuBarCollapsed = true;
    this.menuKeySlovakValue.set('/eshop', 'Eshop');
    this.menuKeySlovakValue.set('/basket', 'Košík');
    this.menuKeySlovakValue.set('/about-us', 'O nás');
    this.menuKeySlovakValue.set('/services', 'Služby');
    this.menuKeySlovakValue.set('/pricelist', 'Cenník');
    this.menuKeySlovakValue.set('/work', 'Naša práva');
    this.menuKeySlovakValue.set('/news', 'Novinky');
    this.menuKeySlovakValue.set('/calendar', 'Kalendár');
    this.menuKeySlovakValue.set('/contact', 'Kontakt');
  }

  ngOnInit(): void {
  }

  collapse(): void {
    this.isMenuBarCollapsed = !this.isMenuBarCollapsed;
  }

  parseUrl(routerUrl: string): string {
    // find in map
    const ret: string = this.menuKeySlovakValue.get(routerUrl) || '';
    return ret === 'undefined' ? 'Úvod' : ret;
  }


}
