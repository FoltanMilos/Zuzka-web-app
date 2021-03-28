import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {EshopService} from './pages/eshop/eshop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EshopService]
})
export class AppComponent {
  title = 'zuzka-web-app';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
    public eshopService: EshopService
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
    // menu bottom
    this.matIconRegistry.addSvgIcon('x', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/X.svg'));
    this.matIconRegistry.addSvgIcon('place', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/place.svg'));
    this.matIconRegistry.addSvgIcon('users', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/users.svg'));
    this.matIconRegistry.addSvgIcon('picture', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/picture.svg'));
    this.matIconRegistry.addSvgIcon('multiply', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/multiply.svg'));
    this.matIconRegistry.addSvgIcon('newspaper', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/newspaper.svg'));
    this.matIconRegistry.addSvgIcon('diploma', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/diploma.svg'));
    this.matIconRegistry.addSvgIcon('hand-shake', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/hand-shake.svg'));
    this.matIconRegistry.addSvgIcon('euro', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/euro.svg'));
    this.matIconRegistry.addSvgIcon('cosmeticsBlack', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/cosmeticsBlack.svg'));
    // eshop


  }
}
