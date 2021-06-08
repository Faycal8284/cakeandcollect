import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';
import { VenpatcatService } from 'src/app/shared/venpatcat.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {

  filterTerm: string;
  vendeurs: any = [];
  categories: any = [];
  allData: any = [];

  constructor(private vendeursService: VendeursService, private categoriesService: CategoriesService,
              private venpatcatServices: VenpatcatService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.getVendeurs();
    this.getAllVendeursPatisseriesCategories();
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

  getAllVendeursPatisseriesCategories() {
    this.venpatcatServices.getAllVendeursPatisseriesCategories().subscribe(data => {
      console.log(data); // JSON.stringify(data)
      this.allData = data;
    });
  }

  goToVendeursDetails(id) {
    //this.router.navigate(['/vendeur-details']);
    this.router.navigate(['vendeur-details', id]);
    console.log('Id dans la fonction goToVendeursDetails : ' + id);
  }

  gotoCategoriePage(id) {
    this.router.navigate(['categorie',id]);
  }

  gotoPatisseriePage(id) {
    this.router.navigate(['patisserie', id]);
  }
}
