import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { Vendeur } from 'src/app/interfaces/Vendeur';
import { CategoriesService } from 'src/app/shared/categories.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  items: any;
  offers: any = [];
  //categorie: Categorie;
  categories: any = [];
  vendeurs: any = [];
  vendeur: Vendeur;

  

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
    private categoriesService: CategoriesService,private vendeursService: VendeursService ,private router: Router) { }

  ngOnInit() {
    // this.getTopOffers();
    this.getCategories();
    this.getVendeurs();
  }
  getCategories() {
    this.categoriesService.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  };
  getVendeurs() {
    this.vendeursService.getAllVendeurs().subscribe(data => {
      console.log(data);
      this.vendeurs = data;
    });
    }
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }
}