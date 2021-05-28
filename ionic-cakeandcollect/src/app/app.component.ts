import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/accueil', icon: 'mail' },
    { title: 'Espace Vendeur', url: '/login-vendeur', icon: 'paper-plane' },
    { title: 'Espace Client', url: '/login-client', icon: 'heart' },
    { title: 'Register Vendeur', url: '/register-vendeur', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
