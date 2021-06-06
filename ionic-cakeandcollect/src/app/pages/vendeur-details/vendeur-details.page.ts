import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { Vendeur } from 'src/app/interfaces/Vendeur';
import { VendeursService } from 'src/app/shared/vendeurs.service';
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

  id: any;
  vendeur: any = {};
  deltaId: any;
  patisseries: any = [];

  slideOpt = {
    initialSlide: 2,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: 'slide'
  };

  constructor(public modalController: ModalController, private router: Router, private route: ActivatedRoute,
              private vendeursService: VendeursService, private venpatcatServices: VenpatcatService, ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log('Id par la route : ' + this.id);
    //this.vendeurDetails = history.state;
    //this.segment = this.vendeurDetails.Patisserie;
    //this.id = this.route.snapshot.params['id'];
    this.vendeursService.getVendeur(this.id).subscribe(data => {
      console.log('Le vendeur : ' + JSON.stringify(data) );
      this.vendeur = JSON.stringify(data);
    });

    this.venpatcatServices.getVendeur(this.id).subscribe(data => {
      console.log('Vendeur détails patisseries : ' + JSON.stringify(data)); // En attendant l'interface
      this.patisseries = data;
      });

    //this.getAllData();
  }

  /* getAllData() {
  //this.id = this.vendeur.IdVendeur;
    this.venpatcatServices.getAllPatisseries().subscribe(data => {
      console.log('Vendeur-détails data : ' + JSON.stringify(data)); // En attendant l'interface
        this.deltaId = JSON.stringify(data[0].IdVendeur);
          if(this.id === this.deltaId){
            this.patisseries = data;
        }
    });
  } */

  gotoVendeursPage() {
    this.router.navigateByUrl('/vendeurs');
  }

  gotoPatisseriePage(id) {
    this.router.navigate(['patisserie', id]);
  }

  gotoPanierPage() {
    this.router.navigateByUrl('/panier');
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
