import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categories: any = [];
  id: any;
  categorie:Categorie= {};
  constructor(private router: Router, private categoriesService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.categoriesService.getCategorie(this.id).subscribe(data =>{
      this.categorie=data;
      console.log(data);
    })
   
  }



  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

}