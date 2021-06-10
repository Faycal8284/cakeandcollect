/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.vendeur.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-register-vendeur',
  templateUrl: './register-vendeur.page.html',
  styleUrls: ['./register-vendeur.page.scss'],
})
export class RegisterVendeurPage implements OnInit {

  id: number;

  register: any = {
    nom: null,
    prenom: null,
    siret: null,
    email: null,
    mdp: null,
    img: null,
    categorie: null,
    note: null,
    code_promo: null,
    partticulier: null,
    tel: null,
    descriptions: null,
    actif: null,
    rue: null,
    code_postal: null,
    ville: null
  };

  isLoggedIn = false;
  isLoginFailed = false;

  errorMessage = '';

  constructor(private router: Router, private authService: AuthService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  isRegistred() {
    const { nom, prenom, siret, email, mdp, img, categorie, note, code_promo, partticulier, tel, descriptions, actif, rue, code_postal, ville } = this.register;
    this.authService.register(nom, prenom, siret, email, mdp, img, categorie, note, code_promo, partticulier, tel, descriptions, actif, rue, code_postal, ville )
    .subscribe(
      data => {
        //this.tokenStorage.saveToken(data.accessToken);
        //this.tokenStorage.saveUser(data);
        console.log(data);

        //this.isLoggedIn = true;
        //this.isLoginFailed = false;
        //this.router.navigateByUrl('/espace-vendeur'); // navigate vers tableau de bord vendeur
        //this.router.navigate(['espace-vendeur', data.id]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
