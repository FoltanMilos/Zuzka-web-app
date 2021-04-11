import { Component, OnInit } from '@angular/core';
const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
import * as pdfMake from 'pdfmake/build/pdfmake';
//
// import * as pdfMake from 'pdfmake/build/pdfmake.js';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-basket-item-small-info',
  templateUrl: './basket-item-small-info.component.html',
  styleUrls: ['./basket-item-small-info.component.scss']
})
export class BasketItemSmallInfoComponent implements OnInit {
  USERS = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      phone: '1-770-736-8031 x56442'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'shanna@melissa.tv',
      phone: '010-692-6593 x09125'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public openPdf(): void {
    console.log('opening pdf');


    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
  }

}
