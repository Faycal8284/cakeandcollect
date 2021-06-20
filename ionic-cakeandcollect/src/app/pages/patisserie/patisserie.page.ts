import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular/';
import { ItemCarts } from 'src/app/interfaces/item-carts';
import {ToastOptions} from '@ionic/core';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import {Storage} from '@ionic/storage-angular'
import { PanierPage } from '../panier/panier.page';
@Component({
  selector: 'app-patisserie',
  templateUrl: './patisserie.page.html',
  styleUrls: ['./patisserie.page.scss'],
})
export class PatisseriePage implements OnInit {
  id: any;
  patisserie: Patisserie = {};

  slideOpt1 = {
    initialSlide: 2,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: 'slide'
  };

  constructor(private router: Router, private patisseriesServices: PatisseriesService,
              private route: ActivatedRoute,private storage: Storage,
              public toast:ToastController,public modal:ModalController) { }

  ngOnInit() {
    this.storage.create();

    this.getPatisserie();
  }

  getPatisserie() {
    this.id = this.route.snapshot.params.id;
    this.patisseriesServices.getPatisserie(this.id).subscribe(patisserie => {
      console.log(patisserie);
      this.patisserie = patisserie;
    });
  }
  gotoPatisseriesPage() {
    this.router.navigateByUrl('/patisseries');
  }
  
  addToCart(patisserieDetails:Patisserie): void{
    let added:boolean=false;
    this.storage.get("cart").then((data:ItemCarts[])=>{
      if(data=== null || data.length===0){
        data = [];
        data.push({
        item: patisserieDetails,
        qty:1,
        amount:patisserieDetails.prix_u
      })
    }
    else{
      for(let i=0;i<data.length; i++){
        const element: ItemCarts = data[i];
        if(patisserieDetails.id === element.item.id){
          element.qty += 1;
          element.amount += patisserieDetails.prix_u;
          added = true;
        }
      }
      if(!added){
        data.push({
        item: patisserieDetails,
        qty:1,
        amount:patisserieDetails.prix_u
        })
      }
    }
    this.storage.set("cart",data)
    .then(async data=>{
      let options: ToastOptions= {
        message: 'Le produit à été ajouté au panier ',
        duration: 1500,
        color: 'danger',
        buttons:[
          {
            side: 'start',
          }]
      };
      (await this.toast.create(options)).present()
          })
    .catch(err=>{
      console.log("Erreur", err)
    })
  })
 }

async openPanier() {
  const modal = await this.modal.create({
  component: PanierPage,
  });
  return await modal.present();
 }
}
