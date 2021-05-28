import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {

  filterTerm: string;
  vendeurs: any = [];
  categories: any = [];

  constructor(private vendeursService: VendeursService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
    this.getVendeurs();
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
}
