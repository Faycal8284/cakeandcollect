import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { Vendeur } from 'src/app/interfaces/vendeur';

import { CategoriesService } from 'src/app/shared/categories.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';
import { VenpatcatService } from 'src/app/shared/venpatcat.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categories: any = [];
  id = 0;
  categorie: Categorie = {};
  //vendeurs: Array<Vendeur> = new Array<Vendeur>();
  vendeurs: any = [];
  vendeur: Vendeur = {};

  deltaId: string;

  constructor(private router: Router, private categoriesService: CategoriesService,
              private route: ActivatedRoute, private vendeursPatCatService: VenpatcatService,
              private vendeursService: VendeursService) { }

  ngOnInit() {
    /* this.id = this.route.snapshot.params.id;
    this.vendeursPatCatService.getCategorie(this.id).subscribe(data => {
      console.log('Vendeurs par catégorie data : ' + JSON.stringify(data)); // En attendant l'interface
      this.vendeurs = data;
      //this.cat = this.categorie.nom;
    }); */

    /* this.categoriesService.getCategorie(this.id).subscribe(data => {
      console.log(data);
      this.categorie = data;
      //this.cat = this.categorie.nom;
    }); */

    this.getAllData();
    //this.getAllVendeurs();

  }

  getAllData() {
    this.id = this.route.snapshot.params.id;
    console.log('zzzzzz', this.vendeursPatCatService.getCategorie(this.id))
    this.vendeursPatCatService.getCategorie(this.id).subscribe(data => {
      console.log('Vendeurs par catégorie data : ' + JSON.stringify(data)); // En attendant l'interface
      this.vendeurs = data;
      this.categorie.nom = data[0].categoriePatisserie;
    });

    /* this.vendeursPatCatService.getAllVendeursPatisseriesCategories().subscribe(data => {
      console.log('Vendeurs par catégorie data : ' + JSON.stringify(data)); // En attendant l'interface
      console.log('data 2 : ' + JSON.stringify(data[2]));
      console.log('catégorie id : ' + JSON.stringify(data[2].IdCategorie));
      console.log('catégorie id param : ' + this.id); // 6

      console.log(this.vendeurs);

      this.deltaId = JSON.stringify(data[2].IdCategorie);
      this.vendeurs = [];
        if(this.id == 6){
          this.vendeurs = data;
          console.log(this.vendeurs);
      }
    }); */
  }

  /* getAllData(){
    this.vendeursPatCatService.getAllVendeursPatisseriesCategories().subscribe(data => {
    console.log(data);
    this.allData = data;
    });
  } */

  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

  goToVendeursDetails(id) {
    //this.router.navigate(['/vendeur-details']);
    this.router.navigate(['vendeur-details', id]);
  }


  /* getAllVendeurs(){
    this.vendeursService.getAllVendeurs().subscribe(data => {
    console.log(data);
    this.vendeurs = data;
    });
  } */

}
