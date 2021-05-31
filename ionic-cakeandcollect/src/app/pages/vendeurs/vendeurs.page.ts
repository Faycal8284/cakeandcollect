import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendeursService } from 'src/app/shared/vendeurs.service';
import { VenpatcatService } from 'src/app/shared/venpatcat.service';

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.page.html',
  styleUrls: ['./vendeurs.page.scss'],
})
export class VendeursPage implements OnInit {

  vendeurs: any = [];
  venpatcats: any = [];

  constructor(private vendeursService: VendeursService, private venpatcatServices: VenpatcatService,
              private router: Router) { }
  ngOnInit() {
    this.getVendeurs();
  }

  getVendeurs() {
    this.vendeursService.getAllVendeurs().subscribe(data => {
      console.log(data);
      this.vendeurs = data;
    });
  }

  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

  goToVendeursDetails(vendeur) {
    this.router.navigate(['/vendeur-details'], vendeur);
  }

  /* gotoFilterPage() {
    this.router.navigate(['/filters']);
  }*/

}
