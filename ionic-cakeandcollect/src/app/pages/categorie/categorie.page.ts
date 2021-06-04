/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { Vendeur } from 'src/app/interfaces/vendeur';

import { CategoriesService } from 'src/app/shared/categories.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  cat: any;
  categories: any = [];
  id: any;
  categorie: Categorie = {};
  vendeurs: Array<Vendeur> = new Array<Vendeur>();
  // vendeur:Vendeur={};

  constructor(private router: Router, private categoriesService: CategoriesService, private route: ActivatedRoute, private vendeursService: VendeursService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.categoriesService.getCategorie(this.id).subscribe(data => {
      this.categorie = data;
      console.log(data);
      console.log(this.categorie.nom);
      this.compare(this.categorie.nom);
      this.compare2();

    });
    this.getVendeurs();
    console.log(this.categorie.nom);
    console.log(this.vendeurs);
    this.compare('USA');
    this.compare2();
  }
  getVendeurs() {
    this.vendeursService.getAllVendeurs().subscribe(data => {
      console.log(data);
      this.vendeurs = data;
      console.log(this.vendeurs);
    });
  }

  compare(nom: string) {
    this.vendeurs;
    for (let i = 0; i < this.vendeurs.length; i++) {
      if (nom === this.vendeurs[i].categorie) {
        return console.log(this.vendeurs[i].categorie);
      }
    }
  };

  // compare2(cat:string){
  //   this.categories;
  //   for(let i=0; i<this.categories.length; i++){
  //     if(cat == this.categories[i].nom){
  //     return true;
  //     }
  //   }
  //   };

  compare2() {
    this.categories;
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].nom) {
        this.cat = this.categories[i].nom;
      }
    }
  };



  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

}

// function item(item: any) {
//   throw new Error('Function not implemented.');
// }
