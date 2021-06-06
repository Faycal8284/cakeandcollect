import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: any = [];
  id: any;
  categorie: Categorie= {};
  constructor(private router: Router, private categoriesService: CategoriesService,
              private route: ActivatedRoute) { }

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

  gotoCategoriePage(id) {
    this.router.navigate(['categorie',id]);
  }

}
