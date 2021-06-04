import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  vendeurs: any = [];
  patisseries: any = [];
  panierItem: any;
  quantite: any = 1;

  constructor(private vendeursService: VendeursService, private patisseriesService: PatisseriesService,
              private router: Router) { }

  ngOnInit() {
    this.getPatisseries();
    this.panierItem = this.patisseries[0];
  }

  getPatisseries() {
    this.patisseriesService.getAllPatisseries().subscribe(patisseries => {
      console.log(patisseries);
      this.patisseries = patisseries;
    });
  }

  // Go to checkout page
  goToCheckout() {
    this.router.navigate(['/login-client']);
  }

  // Back to home page
  close() {
    this.router.navigate(['/patisseries']);
  }
}
