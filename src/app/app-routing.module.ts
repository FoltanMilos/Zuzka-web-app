import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {OurworkComponent} from './pages/ourwork/ourwork.component';
import {ContactComponent} from './pages/contact/contact.component';
import {PricelistComponent} from './pages/pricelist/pricelist.component';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {NewsComponent} from './pages/news/news.component';

const routes: Routes = [
  // { path: '',
  // redirectTo: '',
  // pathMatch: 'full'
  // },
  { path: '', component: HomeComponent},
  { path: 'work', component: OurworkComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'pricelist', component: PricelistComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }