import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: any = [];

  constructor(private router: Router, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

}
