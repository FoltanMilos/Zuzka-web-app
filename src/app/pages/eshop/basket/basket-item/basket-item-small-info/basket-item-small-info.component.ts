import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import jsPDF from 'jspdf';
const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
import * as pdfMake from 'pdfmake/build/pdfmake';
const htmlToPdfmake = require('html-to-pdfmake');

@Component({
  selector: 'app-basket-item-small-info',
  templateUrl: './basket-item-small-info.component.html',
  styleUrls: ['./basket-item-small-info.component.scss']
})
export class BasketItemSmallInfoComponent implements OnInit {
  @ViewChild('htmlData', {static: false}) el!: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  public openPdf(): void {
    console.log('opening pdf');

    // const doc = new jsPDF();
    const pdfTable = this.el.nativeElement;
    // html to pdf format
    console.log(pdfTable.innerHTML);
    const html = htmlToPdfmake(`<div class="red">Milos</div>`);
    // const html = htmlToPdfmake(pdfTable.innerHTML);

    // const documentDefinition = { content: [html] };
    const documentDefinition = {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: ['*'],
            body: [
              ['Faktúra\n ' +
              'c. 000001                                    Forma úhrady: Hotovost               Spôsob dopravy: kurier GLS']
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', '*'],
            heights: [60, 40],
            body: [
              [
                {
                  border: [true, true, true, true],
                  fillColor: '#eeeeee',
                  text: 'Dodávateľ\nObežná 6/65\n010 08 Žilina\nObchodný register okresného súdu Žilina\nDIČ: 989898989\nIČ DPH: 46848486486\nČíslo ÚČtu: 545486456456456456456456'
                },
                {
                  border: [true, true, true, true],
                  fillColor: '#eeeeee',
                  text: 'Odoberateľ\nMiloš Foltán\nObežná 6/65\n010 08 Žilina\nTel:9879898989'
                }
              ]
            ]
          }
        },
        // tu budu produkty
        // { text: 'Produkty', style: 'header' },
        {
          style: 'tableExample',
          table: {
            widths: ['*'],
            heights: [550],
            body: [
              [
                [
                  { text: 'Produkty', fontsize: 13, style: 'subheader',  margin: [225, 20, 0, 8] },
                  {
                    style: 'tableExample',
                    table: {
                      widths: ['*', '*', '*', '*'],
                      body: [
                        ['Názov produktu', 'Jendotková cena', 'Množstvo', 'Celková cena'],
                        ['One value goes here', 'Another one here', '1 ks', '10.00'],
                        ['One value goes here', 'Another one here', '1 ks', '10.00']
                      ]
                    },
                    layout: 'lightHorizontalLines'
                  },
                  { text: 'Suma k úhrade: 150.00', style: 'subheader', margin: [365, 10, 0, 8] },
                  { text: 'Dátum vystavenia faktúry: 27.04.2021', style: 'subheader', margin: [0, 270, 0, 0] },
                  { text: 'Dátum splatnosti faktúry: 27.04.2021', style: 'subheader' },
                  { text: 'Dátum dodania produktov: 27.04.2021', style: 'subheader' },
                  { text: 'Vystavil: Salón alegria', style: 'subheader', margin: [340, 70, 0, 0] },
                  { text: 'Telefón: 0909090909', style: 'subheader', margin: [340, 0, 0, 0] },
                  ]
              ]
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition
      ).download('faktura.pdf');


  }
}
