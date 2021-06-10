/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {ToastOptions} from '@ionic/core';
import { Storage } from '@ionic/storage-angular';
import { ItemCarts } from 'src/app/interfaces/item-carts';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { CommerceClientService } from 'src/app/shared/commerce-client.service';
import { PatisseriesService } from 'src/app/shared/patisseries.service';



@Component({
  selector: 'app-patisseries',
  templateUrl: './patisseries.page.html',
  styleUrls: ['./patisseries.page.scss'],
})
export class PatisseriesPage implements OnInit {

  constructor(private patisseriesService: PatisseriesService, private router: Router,
              private commerce: CommerceClientService, private storage: Storage,
              public toast:ToastController,
              ) { }

  patisseries: any = [];

  ngOnInit() {
    this.getPatisseries();
    this.storage.create();
    this.loadProducts();
  }

  getPatisseries() {
    this.patisseriesService.getAllPatisseries().subscribe(data => {
      console.log(data);
      this.patisseries = data;
    });
  }
  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

  gotoPatisseriePage(id) {
    this.router.navigate(['patisserie', id]);
  }
 

  // autre méthode avec commercejs
  async loadProducts() {
    try {
      const { data: patisseries } = await this.commerce.client.patisseries.list();
      this.patisseries = patisseries;
    } catch {
      // a network error occurred or something went wrong
    }
  }
  addToCart(patisserieDetails:Patisserie): void{
    let added:boolean=false;
    this.storage.get("cart").then((data:ItemCarts[])=>{
      console.log('zzzzzzzzzzzzzzzzzzz',patisserieDetails)
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
    .then(data=>{
      let options: ToastOptions= {
        message: 'Votre panier a été mis à jour ',
        duration: 1500,
        buttons:[
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          }]
      };
      this.toast.create(options)
    })
    .catch(err=>{
      console.log("Erreur", err)
    })
  })
 }
}
