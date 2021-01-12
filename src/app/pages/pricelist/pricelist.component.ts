import {Component, Injectable, OnInit} from '@angular/core';
import {PriceItem} from '../../model/priceItem.model';
import {HttpClient} from '@angular/common/http';

export const LISTPRICE: PriceItem[] = [];

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class PricelistComponent implements OnInit {

  public listPrice = LISTPRICE;
  public filePath = '../../assets/pricelist.txt';
  public text = null;
  public lastCategory = '';

  constructor( private http: HttpClient) {
    this.listPrice = [];
  }

  ngOnInit(): void {
    this.readFile();
  }

  readFile(): void {
    this.http.get(this.filePath,  {responseType: 'text'}).subscribe(
        (data: string) => {
        for (const line of data.split(/[\r\n]+/)) {
          const split: string[] = line.split(';');
          console.log(split);
          if (split[0] !== '' && split[0] !== null) {
            this.listPrice.push(new PriceItem(split[0], split[1], split[2]));
          }
        }
      });
  }

  isChangerdCategory(input: string): boolean {
    if (this.lastCategory === input && this.lastCategory !== '') {
      return false;
    } else {
      this.lastCategory = input;
      return true;
    }
  }

}
