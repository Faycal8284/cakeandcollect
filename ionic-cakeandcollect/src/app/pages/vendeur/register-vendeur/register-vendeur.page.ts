/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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


  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService, private toast: ToastController) { }

  ngOnInit() {
  }

  isRegistred() {
    console.log(this.registerForm);
    const { nom, prenom, siret, email, mdp, img, categorie, note, code_promo, particulier, tel, descriptions, actif, rue, code_postal, ville } = this.registerForm;
    this.authService.register(nom, prenom, siret, email, mdp, img, categorie, note, code_promo, particulier, tel, descriptions, actif, rue, code_postal, ville)
      .subscribe(
        async data => {
          console.log(data);

          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.router.navigateByUrl('/login-vendeur'); // navigate vers la page de connexion

          const toast = await this.toast.create({
            message: 'Compte créé avec succès ! Connectez-vous !',
            duration: 6000
          });
          toast.present();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
}
