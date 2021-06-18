import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarts } from 'src/app/interfaces/item-carts';
import { Storage } from '@ionic/storage-angular';
import { ModalController, NavController, ViewDidEnter } from '@ionic/angular';
import { AddPatisseriePage } from '../vendeur/add-patisserie/add-patisserie.page';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {
  panierItems: ItemCarts[];
  total: number = 0;
  cartCount = new BehaviorSubject(0);
  itemQty: number = 0;
  patisserie: Patisserie = {};

  constructor(
    private storage: Storage,
    private router: Router,
    public modal: ModalController,
    public navCtrl: NavController
  ) {}

  ionViewDidEnter(): void {
    this.storage
      .get('cart')
      .then((data: ItemCarts[]) => {
        this.panierItems = data;
        this.panierItems.forEach((element: ItemCarts) => {
          // this.itemQty = element.qty;
          // this.total = (element.item.prix_u * element.qty)
        });
      })
      .catch((err) => {
        console.log('erreur', err);
      });

    // this.panierItems.forEach((element:ItemCarts) =>{
    //   if(element.item.disponible== true)
    //   this.total += (element.item.prix_u * element.qty)
    // })
  }

  addone(patisserieDetails: Patisserie): void {
    console.log(patisserieDetails.id);
    let added: boolean = false;
    this.storage.get('cart').then((data: ItemCarts[]) => {
      // if(this.panierItems.find(items=>{items.item.id==id})){
      //   return true
      // }
      for (let i = 0; i < data.length; i++) {
        const element: ItemCarts = data[i];
        console.log(element);
        if (element.item.id === patisserieDetails.id) {
          element.qty += 1;
          added = true;
        }
        this.storage.set('cart', data);

      }
    });

    // for(let i=0;i<data.length; i++){
    //   const element: ItemCarts = data[i];
    //   if(element.item.id==items.item.id){
    //     if(element.item.quantite>=element.qty){
    //       items.qty += 1 ;
    // this.total = (element.item.prix_u * this.itemQty)

    // this.cartCount.subscribe(count=>{count=element.qty});
    // console.log(this.cartCount)
    // }else{
    //   return "quantite max"

    // }}
    // this.cartCount.next(this.cartCount.value)
  }

  // Back to home page
  close() {
    this.router.navigate(['/patisseries']);
  }
  closeModal(): void {
    this.modal.dismiss();
  }
}
