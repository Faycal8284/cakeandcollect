/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommerceClientService } from 'src/app/shared/commerce-client.service';
import { PatisseriesService } from 'src/app/shared/patisseries.service';


@Component({
  selector: 'app-patisseries',
  templateUrl: './patisseries.page.html',
  styleUrls: ['./patisseries.page.scss'],
})
export class PatisseriesPage implements OnInit {

  constructor(private patisseriesService: PatisseriesService, private router: Router,
              private commerce: CommerceClientService) { }

  patisseries: any = [];

  ngOnInit() {
    this.getPatisseries();

    this.loadProducts();
  }

  getPatisseries() {
    this.patisseriesService.getAllPatisseries().subscribe(data => {
      console.log(data);
      this.patisseries = data;
    });
  }

  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

  gotoPatisseriePage(id) {
    this.router.navigate(['patisserie', id]);
  }

  gotoPanierPage() {
    this.router.navigateByUrl('/panier');
  }

  // autre méthode avec commercejs
  async loadProducts() {
    try {
      const { data: patisseries } = await this.commerce.client.patisseries.list();
      this.patisseries = patisseries;
    } catch {
      // a network error occurred or something went wrong
    }
  }

 /*  onBuyNowButtonTouched(patisserie: any) {
    window.open(patisserie.checkout_url.checkout, '__target');
  } */

}
