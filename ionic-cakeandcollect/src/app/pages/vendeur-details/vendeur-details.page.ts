import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { VenpatcatService } from 'src/app/shared/venpatcat.service';

@Component({
  selector: 'app-vendeur-details',
  templateUrl: './vendeur-details.page.html',
  styleUrls: ['./vendeur-details.page.scss'],
})
export class VendeurDetailsPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment: any;
  vendeurDetails: any;
  venpatcats: any = [];

  slideOpt = {
    initialSlide: 2,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: 'slide'
  };

  constructor(public modalController: ModalController, private router: Router,
    private venpatcatServices: VenpatcatService) { }

  ngOnInit() {
    //this.vendeurDetails = history.state;
    //this.segment = this.vendeurDetails.Patisserie;
    this.getAllData();
  }

  getAllData() {
    this.venpatcatServices.getAllVendeursPatisseriesCategories().subscribe(data => {
      console.log('Vendeur-détails data : ' + data);
      this.venpatcats = data;
    });
  }

   // Cette fonction sera appelée lors du changement de segment de catégorie patisserie
   /* async segmentChanged(ev) {
    const index = await this.vendeurDetails.venpatcats.findIndex(pat => pat.Patisserie === ev.detail.value);
    await this.slider.slideTo(index);
  } */

  // Cette fonction sera appelée, lors du changement de curseur de catégorie patisserie
  /* async slideChanged() {
    const sliderIndexNumber = await this.slider.getActiveIndex();
    this.segment = this.vendeurDetails.venpatcats[sliderIndexNumber].nom;
  } */

  // Goto Cart Page
  /* gotoPanierPage() {
    this.router.navigate(['/panier']);
  } */

  // Retour page Accueil
 /*  quitter() {
    this.router.navigate(['/accueil']);
  } */

}
