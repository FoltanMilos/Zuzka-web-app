import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-basket-personal-info',
  templateUrl: './basket-personal-info.component.html',
  styleUrls: ['./basket-personal-info.component.scss']
})
export class BasketPersonalInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ts-ignore
  @ViewChild('first', {read: ElementRef}) firstName: ElementRef<HTMLElement>;
  // @ts-ignore
  @ViewChild('last', {read: ElementRef}) lastName: ElementRef<HTMLElement>;
  firstNameAutofilled: boolean | undefined;
  lastNameAutofilled: boolean | undefined;
  telephonePrefix = ['+421', '+420'];

  constructor(private autofillMonitor: AutofillMonitor) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.autofillMonitor.monitor(this.firstName)
      .subscribe(e => this.firstNameAutofilled = e.isAutofilled);
    this.autofillMonitor.monitor(this.lastName)
      .subscribe(e => this.lastNameAutofilled = e.isAutofilled);
  }

  ngOnDestroy(): void {
    this.autofillMonitor.stopMonitoring(this.firstName);
    this.autofillMonitor.stopMonitoring(this.lastName);
  }

}
