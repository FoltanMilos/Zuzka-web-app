import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PricelistComponent } from './pages/pricelist/pricelist.component';
import { BodyComponent } from './body/body.component';
import { OurworkComponent } from './pages/ourwork/ourwork.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NewsComponent } from './pages/news/news.component';
import {HttpClientModule} from '@angular/common/http';
import { PriceItemComponent } from './pages/pricelist/price-item/price-item.component';
import {MatIconModule} from '@angular/material/icon';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MenuBottomComponent } from './menu-bottom/menu-bottom.component';
import { CovidComponent } from './pages/covid/covid.component';
import { LogoComponent } from './logo/logo.component';
import { EshopComponent } from './pages/eshop/eshop.component';
import { ItemComponent } from './pages/eshop/item/item.component';
import { BasketComponent } from './pages/eshop/basket/basket.component';
import { ListItemComponent } from './pages/eshop/list-item/list-item.component';
import { ItemInfoComponent } from './pages/eshop/item-info/item-info.component';
import { BasketItemComponent } from './pages/eshop/basket/basket-item/basket-item.component';
import {EshopService} from './pages/eshop/eshop.service';
import { BasketPayBottomComponent } from './pages/eshop/basket/basket-pay-bottom/basket-pay-bottom.component';
import { BasketDeliveryComponent } from './pages/eshop/basket/basket-delivery/basket-delivery.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { BasketPersonalInfoComponent } from './pages/eshop/basket/basket-personal-info/basket-personal-info.component';
import { BasketFinaliseOrderComponent } from './pages/eshop/basket/basket-finalise-order/basket-finalise-order.component';
import { BasketItemSmallInfoComponent } from './pages/eshop/basket/basket-item/basket-item-small-info/basket-item-small-info.component';
import { BasketIconComponent } from './pages/eshop/basket/basket-icon/basket-icon.component';
import { EshopTreeListComponent } from './pages/eshop/eshop-sales/eshop-tree-list/eshop-tree-list.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    PricelistComponent,
    BodyComponent,
    OurworkComponent,
    ContactComponent,
    CalendarComponent,
    NewsComponent,
    PriceItemComponent,
    ServicesComponent,
    AboutUsComponent,
    MenuBottomComponent,
    CovidComponent,
    LogoComponent,
    EshopComponent,
    ItemComponent,
    BasketComponent,
    ListItemComponent,
    ItemInfoComponent,
    BasketItemComponent,
    BasketPayBottomComponent,
    BasketDeliveryComponent,
    BasketPersonalInfoComponent,
    BasketFinaliseOrderComponent,
    BasketItemSmallInfoComponent,
    BasketIconComponent,
    EshopTreeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    NgbCollapseModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    CdkTreeModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [EshopService],
  bootstrap: [AppComponent, MenuComponent
  ]
})
export class AppModule { }
