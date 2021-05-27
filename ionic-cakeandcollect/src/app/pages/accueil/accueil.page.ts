import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  items: any;
  offers: any = [];
  categories: any = [];
  restaurants: any = [];

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

  constructor(private dataService: DataService,
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit() {
    this.getRestaurants();
    this.getTopOffers();
    this.getCategories();
  }

  getTopOffers() {
    this.offers = this.dataService.getTopOffers();
  }

  gotoSearchPage(ev) {
    this.router.navigate(['/tabs/search']);
  }

  gotoHotelList() {
    this.router.navigate(['/hotel-list']);
  }

  gotoCategoriesPage() {
    this.router.navigate(['/tabs/categories']);
  }

  gotoRestaurantPage() {
    this.router.navigate(['/tabs/restaurants']);
  }

  getRestaurants() {
    this.restaurants = this.dataService.getAllRestaurants();
  }

  getCategories() {
    this.categories = this.categoriesService.getAllCategories();
  }

}
