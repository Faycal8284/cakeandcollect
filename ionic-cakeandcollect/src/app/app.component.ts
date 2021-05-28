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
    { title: 'Accueil', url: '/accueil', icon: 'mail' },
    { title: 'Espace Vendeur', url: '/login-vendeur', icon: 'paper-plane' },
    { title: 'Espace Client', url: '/login-client', icon: 'heart' },
    { title: 'Register Vendeur', url: '/register-vendeur', icon: 'archive' },
    { title: 'Catégories', url: '/categories', icon: 'heart' },
    { title: 'Spam', url: '', icon: 'warning' },
  ];
  public labels = ['Famille', 'Amis', 'Notes', 'Travail', 'Voyage', 'Rappels'];
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
    signout() {
      this.router.navigate(['/signin']);
    }
}
