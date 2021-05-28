import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { Vendeur } from 'src/app/interfaces/Vendeur';
import { CategoriesService } from 'src/app/shared/categories.service';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  filterTerm: string;

  items: any;
  //categorie: Categorie;
  categories: any = [];
  vendeurs: any = [];
  patisseries: any = [];
  // vendeur: Vendeur;

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
      private patisseriesService: PatisseriesService, private router: Router) { }

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
      this.vendeurs = data;
    });
  }

  getPatisseries() {
    this.patisseriesService.getAllPatisseries().subscribe(data => {
      console.log(data);
      this.patisseries = data;
    });
  }

  gotoCategoriesPage() {
    this.router.navigate(['/categories']);
  }

  gotoRecherchePage(ev) {
    this.router.navigate(['/recherche']);
  }
}
