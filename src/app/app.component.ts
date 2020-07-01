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

  guardar(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/home');
  }
  guardar1(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/pet');
  }
  guardar2(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/pet');
  }
  guardar3(){
    this.splashScreen.hide();
    return this.router.navigateByUrl('/pet');
  }
}
