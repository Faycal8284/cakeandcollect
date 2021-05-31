import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      this.vendeurs= data ;
      this.shuffleArray(this.vendeurs)
    });
  }

  getPatisseries() {
    this.patisseriesService.getAllPatisseries().subscribe(data => {
      console.log(data);
      this.patisseries = data;
    });
  }

  shuffleArray = function(array) {
    var m = array.length, t, i;
  
    while (m) {
      
      i = Math.floor(Math.random() * m--);
  
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
}
