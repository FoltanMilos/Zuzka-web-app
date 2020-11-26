import {Component, Injectable, OnInit} from '@angular/core';
import {PriceItem} from '../../model/priceItem.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class PricelistComponent implements OnInit {

  public listPrice = [];
  public filePath = '../../assets/pricelist.txt';
  public text = null;

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
          if (split[0] !== 'KEYS' && split[1] !== '-1') {
            // @ts-ignore
            this.listPrice.push(new PriceItem(split[0], split[1], 'vseobecna'));
          }
        }
      });
  }

}
