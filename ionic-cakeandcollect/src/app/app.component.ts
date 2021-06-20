import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, Platform } from '@ionic/angular';

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
    { title: 'Espace Client', url: '/client', icon: 'person' },
    { title: 'Espace Vendeur', url: '/login-vendeur', icon: 'restaurant' },
    { title: 'Vendeurs', url: '/vendeurs', icon: 'business' },
    { title: 'Contactez-Nous', url: '/contact', icon: 'create' },
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
