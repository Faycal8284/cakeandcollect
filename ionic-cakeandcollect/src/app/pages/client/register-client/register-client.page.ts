/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.client.service';


@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.page.html',
  styleUrls: ['./register-client.page.scss'],
})
export class RegisterClientPage implements OnInit {

  registerForm: any = {
    nom: null,
    prenom: null,
    email: null,
    mdp: null,
    img: null,
    tel: null,
    actif: 1, // actif par défaut
    rue: null,
    code_postal: null,
    ville: null,
    note_vendeur: null,
    avis_commande: null,
  };

  //signupInfo: Client;
  client: any = {};
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  isRegistred() {
    console.log(this.registerForm);
    const { nom, prenom, email, mdp, img, tel, actif, rue, code_postal, ville, note_vendeur, avis_commande } = this.registerForm;
    this.authService.register(nom, prenom, email, mdp, img, tel, actif, rue, code_postal, ville, note_vendeur, avis_commande )
    .subscribe(
      data => {
        console.log(data);

        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/login-client'); // navigate vers la page de connexion
        //this.router.navigate(['login-vendeur', data.id]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
