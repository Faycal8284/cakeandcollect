/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendeur } from 'src/app/interfaces/Vendeur';
import { AuthService } from 'src/app/shared/auth.vendeur.service';

@Component({
  selector: 'app-register-vendeur',
  templateUrl: './register-vendeur.page.html',
  styleUrls: ['./register-vendeur.page.scss'],
})
export class RegisterVendeurPage implements OnInit {

  registerForm: any = {
    nom: null,
    prenom: null,
    siret: null,
    email: null,
    mdp: null,
    img: null,
    categorie: null,
    note: null,
    code_promo: null,
    particulier: null,
    tel: null,
    descriptions: null,
    actif: 1, // actif par défaut
    rue: null,
    code_postal: null,
    ville: null
  };

  signupInfo: Vendeur;
  vendeur: any = {};
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  isRegistred() {
    console.log(this.registerForm);
    const { nom, prenom, siret, email, mdp, img, categorie, note, code_promo, particulier, tel, descriptions, actif, rue, code_postal, ville } = this.registerForm;
    this.authService.register(nom, prenom, siret, email, mdp, img, categorie, note, code_promo, particulier, tel, descriptions, actif, rue, code_postal, ville )
    .subscribe(
      data => {
        console.log(data);

        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/login-vendeur'); // navigate vers la page de connexion
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  /* onSubmit() {
    console.log(this.registerForm);

    this.vendeur = this.authService.create(
      this.registerForm.nom,
      this.registerForm.prenom,
      this.registerForm.siret,
      this.registerForm.email,
      this.registerForm.mdp,
      this.registerForm.img,
      this.registerForm.categorie,
      this.registerForm.note,
      this.registerForm.code_promo,
      this.registerForm.particulier,
      this.registerForm.tel,
      this.registerForm.descriptions,
      this.registerForm.actif,
      this.registerForm.rue,
      this.registerForm.code_postal,
      this.registerForm.ville);

      this.authService.register(nom, prenom, siret, email, mdp, img, categorie, note, code_promo, particulier, tel, descriptions, actif, rue, code_postal, ville )
      .subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  } */

}
