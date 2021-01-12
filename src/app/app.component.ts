import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zuzka-web-app';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
    this.matIconRegistry.addSvgIcon(
      'vseobecne', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/highlighter-solid.svg')
    );
    this.matIconRegistry.addSvgIcon('cosmetics', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/cosmetics.svg'));
    this.matIconRegistry.addSvgIcon('skincare', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/skincare.svg'));
    this.matIconRegistry.addSvgIcon('dry-clean', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dry-clean.svg'));
    this.matIconRegistry.addSvgIcon('dry-clean-empty', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dry-clean-empty.svg'));
    this.matIconRegistry.addSvgIcon('google-maps', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/google-maps.svg'));
    this.matIconRegistry.addSvgIcon('phone-call', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/phone-call.svg'));
    this.matIconRegistry.addSvgIcon('telephone', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/telephone.svg'));
    this.matIconRegistry.addSvgIcon('email', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/email.svg'));
    this.matIconRegistry.addSvgIcon('back-in-time', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/back-in-time.svg'));
    this.matIconRegistry.addSvgIcon('arrow-right', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/arrow_right.svg'));
  }
}
