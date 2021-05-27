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
    { title: 'Trash', url: '', icon: 'trash' },
    { title: 'Spam', url: '', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
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
