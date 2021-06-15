import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menus: any = [];
  selectedMenu: any;
  public appPages = [
    { title: 'Accueil', url: '/accueil', icon: 'home' },
    { title: 'Recherche', url: '/recherche', icon: 'search' },
    { title: 'Espace Client', url: '/login-client', icon: 'person' },
    { title: 'Espace Vendeur', url: '/login-vendeur', icon: 'restaurant' },
    { title: 'Login Client', url: '/client', icon: 'create' },
    { title: 'Panier', url: '/panier', icon: 'cart' },
    { title: 'upload', url: '/upload', icon: 'settings' },
    { title: 'tests', url: '/tests', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    ) {
      this.initializeApp();
    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
}
