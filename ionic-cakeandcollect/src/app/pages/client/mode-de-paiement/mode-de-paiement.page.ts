/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-mode-de-paiement',
  templateUrl: './mode-de-paiement.page.html',
  styleUrls: ['./mode-de-paiement.page.scss'],
})
export class ModeDePaiementPage implements OnInit {

  cards: any = [{ name: 'Master Card', cardNumber: '1234...', img: 'assets/images/cards/mastercard.png' },
  { name: 'Paypal', cardNumber: '5678...', img: 'assets/images/cards/paypal.png' },
  { name: 'Visa Card', cardNumber: '4325...', img: 'assets/images/cards/visa.png' }];

  id: any;
  user = null;

  constructor(private router: Router, private route: ActivatedRoute, private storage: Storage) { }


  ngOnInit() {

    try {
      this.user = JSON.parse(sessionStorage.getItem('auth-user'));
      this.id = this.user.id;
      console.log(this.id);
    } catch(e) {
      this.user = sessionStorage.getItem('auth-user');
    }

  }

  gotToEspaceClient() {
    this.router.navigate(['espace-client/' + this.id]);
  }

  /* goToConfirmationCommande() {
    this.router.navigate(['/confirmation-commande']);
  } */

}
