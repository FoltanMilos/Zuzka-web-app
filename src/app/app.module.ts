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
import { ProductlistComponent } from './pages/productlist/productlist.component';
import {MatIconModule} from '@angular/material/icon';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

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
    ProductlistComponent,
    ServicesComponent,
    AboutUsComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatIconModule,
        NgbCollapseModule
    ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent
  ]
})
export class AppModule { }
