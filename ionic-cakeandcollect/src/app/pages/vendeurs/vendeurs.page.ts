import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendeursService } from 'src/app/shared/vendeurs.service';

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.page.html',
  styleUrls: ['./vendeurs.page.scss'],
})
export class VendeursPage implements OnInit {

  vendeurs: any = [];

  constructor(private vendeursService: VendeursService, private router: Router) { }
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
    this.router.navigateByUrl('/vendeur-details', { state: vendeur });
  }

  /* gotoFilterPage() {
    this.router.navigate(['/filters']);
  }*/

}
