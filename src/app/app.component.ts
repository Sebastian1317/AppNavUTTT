import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  guardarUTTT(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/home');
  }
  guardarUTT(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/home-tepetitlan');
  }
  guardarUTC(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/home-chapulhuacan');
  }

  guardarMM(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/home-mixto');
  }
  guardarM(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/home-maestrias');
  }
}
