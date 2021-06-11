/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  isRegistred() {
    console.log(this.registerForm);
    const { nom, prenom, siret, email, mdp, img, categorie, note, code_promo, particulier, tel, descriptions, actif, rue, code_postal, ville } = this.registerForm;
    this.authService.register(nom, prenom, siret, email, mdp, img, categorie, note, code_promo, particulier, tel, descriptions, actif, rue, code_postal, ville)
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

  loadImageFromDevice(event) {
    console.log(event);

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
      // create blobURL, such that we could use it in an image element:
      let blobURL: string = URL.createObjectURL(blob);
    };

    reader.onerror = (error) => {

      console.log(error);
      //handle errors

    };
  };
}
