/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';
import { Storage } from '@ionic/storage-angular';
import { ItemCarts } from 'src/app/interfaces/item-carts';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { CommerceClientService } from 'src/app/shared/commerce-client.service';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import { PanierPage } from '../panier/panier.page';

@Component({
  selector: 'app-patisseries',
  templateUrl: './patisseries.page.html',
  styleUrls: ['./patisseries.page.scss'],
})
export class PatisseriesPage implements OnInit {
  patisseries: any = [];

  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    effect: 'slide',
  };

  constructor(
    private patisseriesService: PatisseriesService,
    private router: Router,
    private storage: Storage,
    public toast: ToastController,
    public modal: ModalController
  ) {}

  ngOnInit() {
    this.getPatisseries();
    this.storage.create();

    //this.loadProducts();
  }

  getPatisseries() {
    this.patisseriesService.getAllPatisseries().subscribe((data) => {
      console.log(data);
      this.patisseries = data;
      this.shuffleArray(this.patisseries);
    });
  }
  shuffleArray = function (array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };
  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

  gotoPatisseriePage(id) {
    this.router.navigate(['patisserie', id]);
  }

  gotoPanierPage() {
    this.router.navigateByUrl('/panier');
  }
  addToCart(patisserieDetails: Patisserie): void {
    let added: boolean = false;
    this.storage.get('cart').then((data: ItemCarts[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push({
          item: patisserieDetails,
          qty: 1,
          amount: patisserieDetails.prix_u,
        });
      } else {
        for (let i = 0; i < data.length; i++) {
          const element: ItemCarts = data[i];
          if (patisserieDetails.id === element.item.id) {
            element.qty += 1;
            element.amount += patisserieDetails.prix_u;
            added = true;
          }
        }
        if (!added) {
          data.push({
            item: patisserieDetails,
            qty: 1,
            amount: patisserieDetails.prix_u,
          });
        }
      }
      this.storage
        .set('cart', data)
        .then(async (data) => {
          let options: ToastOptions = {
            message: 'Le produit à été ajouté au panier ',
            duration: 1500,
            color: 'danger',
            buttons: [
              {
                side: 'start',
              },
            ],
          };
          (await this.toast.create(options)).present();
        })
        .catch((err) => {
          console.log('Erreur', err);
        });
    });
  }
  async openPanier() {
    const modal = await this.modal.create({
      component: PanierPage,
    });
    return await modal.present();
  }

  // autre méthode avec commercejs
  /* async loadProducts() {
    try {
      const { data: patisseries } = await this.commerce.client.patisseries.list();
      this.patisseries = patisseries;
    } catch {
      // a network error occurred or something went wrong
    }
  } */

  // autre méthode avec commercejs
  // async loadProducts() {
  //   try {
  //     const { data: patisseries } = await this.commerce.client.patisseries.list();
  //     this.patisseries = patisseries;
  //   } catch {
  // a network error occurred or something went wrong
  //   }
  // }
  //   addToCart(patisserieDetails:Patisserie): void{
  //     let added:boolean=false;
  //     this.storage.get("cart").then((data:ItemCarts[])=>{
  //       console.log('zzzzzzzzzzzzzzzzzzz',patisserieDetails)
  //       if(data=== null || data.length===0){
  //         data = [];
  //         data.push({
  //         item: patisserieDetails,
  //         qty:1,
  //         amount:patisserieDetails.prix_u
  //       })
  //     }
  //     else{
  //       for(let i=0;i<data.length; i++){
  //         const element: ItemCarts = data[i];
  //         if(patisserieDetails.id === element.item.id){
  //           element.qty += 1;
  //           element.amount += patisserieDetails.prix_u;
  //           added = true;
  //         }
  //       }
  //       if(!added){
  //         data.push({
  //         item: patisserieDetails,
  //         qty:1,
  //         amount:patisserieDetails.prix_u
  //         })
  //       }
  //     }
  //     this.storage.set("cart",data)
  //     .then(data=>{
  //       let options: ToastOptions= {
  //         message: 'Votre panier a été mis à jour ',
  //         duration: 1500,
  //         buttons:[
  //           {
  //             side: 'start',
  //             icon: 'star',
  //             text: 'Favorite',
  //             handler: () => {
  //               console.log('Favorite clicked');
  //             }
  //           }]
  //       };
  //       this.toast.create(options)
  //     })
  //     .catch(err=>{
  //       console.log("Erreur", err)
  //     })
  //   })
  //  }
}
