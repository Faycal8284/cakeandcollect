/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';
//import { Geolocation } from '@ionic-native/geolocation';
import { Directive, AfterViewInit, ElementRef, Renderer2, Input } from '@angular/core';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})

@Directive({
  selector: '[parallaxHeader]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})

export class AccueilPage implements OnInit {

  @Input('parallaxHeader') imagePath: string;
	@Input('parallaxHeight') parallaxHeight: number;

	private headerHeight: number;
	private header: HTMLDivElement;
  private mainContent: HTMLDivElement;


  filterTerm: string;

  items: any;
  categories: any = [];
  vendeurs: any = [];
  patisseries: any = [];

  slideOpt1 = {
    initialSlide: 2,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: 'slide'
  };

  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3.2,
    spaceBetween: 0,
    loop: true,
    effect: 'slide',
  };

  slideOpt3 = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.1,
    spaceBetween: 0,
    loop: true,
    effect: 'slide',
  };
  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.2,
    spaceBetween: 10,
    loop: true,
    effect: 'slide',
  };

    constructor(
      private categoriesService: CategoriesService, private vendeursService: VendeursService,
      private patisseriesService: PatisseriesService, private router: Router,
      private element: ElementRef, private renderer: Renderer2, private domCtrl: DomController) { }

  ngOnInit() {
    this.getCategories();
    this.getVendeurs();
    this.getPatisseries();
  }
  getCategories() {
    this.categoriesService.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;

    });
  }

  getVendeurs() {
    this.vendeursService.getAllVendeurs().subscribe(data => {
      console.log(data);
      this.vendeurs= data ;
      this.shuffleArray(this.vendeurs);
    });
  }

  getPatisseries() {
    this.patisseriesService.getAllPatisseries().subscribe(data => {
      console.log(data);
      this.patisseries = data;
      this.shuffleArray(this.patisseries);

    });
  }
  shuffleArray = function(array) {
    let m = array.length; let t; let i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  gotoCategoriePage(id) {
    this.router.navigate(['categorie',id]);
  }

  gotoRecherchePage(ev) {
    this.router.navigate(['/recherche']);
  }

  gotoVendeursPage() {
    this.router.navigateByUrl('/vendeurs');
  }

  goToVendeursDetails(id) {
    this.router.navigate(['vendeur-details', id]);
  }

  gotoCategoriesPage() {
    this.router.navigate(['/categories']);
  }

  gotoPatisseriesPage() {
    this.router.navigate(['/patisseries']);
  }

  gotoPanierPage() {
    this.router.navigateByUrl('/panier');
  }

  gotoPatisseriePage(id) {
    this.router.navigate(['patisserie', id]);
  }

 /*  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
   }).catch((error) => {
     console.log('Error getting location', error);
   });

   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
   });

   const subscription = this.geolocation.watchPosition()
                              .filter((p) => p.coords !== undefined) //Filter Out Errors
                              .subscribe(position => {
  console.log(position.coords.longitude + ' ' + position.coords.latitude);
});

// To stop notifications
subscription.unsubscribe(); */

  /* shuffleArray = function(array) {
    var m = array.length, t, i;

    while (m) {

      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  } */


  ngAfterViewInit(){

		this.headerHeight = this.parallaxHeight;
    	this.mainContent = this.element.nativeElement.querySelector('.main-content');

		this.domCtrl.write(() => {

			this.header = this.renderer.createElement('div');

			this.renderer.insertBefore(this.element.nativeElement, this.header, this.element.nativeElement.firstChild);

			this.renderer.setStyle(this.header, 'background-image', 'url(' + this.imagePath + ')');
			this.renderer.setStyle(this.header, 'height', this.headerHeight + 'px');
			this.renderer.setStyle(this.header, 'background-size', 'cover');

		});

  	}

	onContentScroll(ev){

	    this.domCtrl.read(() => {

	      let translateAmt; let scaleAmt;

	      // Already scrolled past the point at which the header image is visible
	      if(ev.detail.scrollTop > this.parallaxHeight){
	        return;
	      }

	      if(ev.detail.scrollTop >= 0){
	          translateAmt = -(ev.detail.scrollTop / 2);
	          scaleAmt = 1;
	      } else {
	          translateAmt = 0;
	          scaleAmt = -ev.detail.scrollTop / this.headerHeight + 1;
	      }

	      this.domCtrl.write(() => {
	        this.renderer.setStyle(this.header, 'transform', 'translate3d(0,'+translateAmt+'px,0) scale('+scaleAmt+','+scaleAmt+')');
	        this.renderer.setStyle(this.mainContent, 'transform', 'translate3d(0, '+(-ev.detail.scrollTop) + 'px, 0');
	      });

	    });

	}



}
