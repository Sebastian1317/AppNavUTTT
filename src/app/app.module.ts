import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Noticia1PageModule } from './modal/noticia1/noticia1.module';
import { Noticia2PageModule } from './modal/noticia2/noticia2.module';
import { Noticia3PageModule } from './modal/noticia3/noticia3.module';
import { Noticia4PageModule } from './modal/noticia4/noticia4.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, Noticia1PageModule, Noticia2PageModule,
    Noticia3PageModule, Noticia4PageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
