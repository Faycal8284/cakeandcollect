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
    { title: 'Login Client', url: '/client', icon: 'search' },
    { title: 'TLB CLI', url: '/tableau-de-bord-client', icon: 'home' },
    { title: 'Espace Vendeur', url: '/login-vendeur', icon: 'person' },
    { title: 'Espace Client', url: '/login-client', icon: 'person' },
    { title: 'Register Vendeur', url: '/register-vendeur', icon: 'add' },
    { title: 'Catégories', url: '/categories', icon: 'heart' },
    { title: 'Recherche', url: '/recherche', icon: 'search' },
    { title: 'Vendeurs', url: '/vendeurs', icon: 'restaurant' },
    { title: 'Patisseries', url: '/patisseries', icon: 'restaurant' },
    { title: 'Panier', url: '/panier', icon: 'cart' },

  ];
  public labels = ['Famille', 'Amis', 'Notes', '', '', 'Rappels'];
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
      this.router.navigate(['/login-client']);
    }
}
