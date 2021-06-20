/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarts } from 'src/app/interfaces/item-carts';
import { Storage } from '@ionic/storage-angular';
import { ModalController, NavController, ViewDidEnter } from '@ionic/angular';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {
  panierItems: ItemCarts[];
  total = 0;
  cartCount = new BehaviorSubject(0);
 
  itemQty = 0;
  patisserie: Patisserie = {};
  qty  = new BehaviorSubject<number>(0);
  totalSum: number;

  constructor(
    private storage: Storage,
    private router: Router,
    public modal: ModalController,
    public navCtrl: NavController,
   
  ){}

  ionViewDidEnter(): void {
    console.log('render')
          this.storage.get('cart').then((data: ItemCarts[]) => {
            this.panierItems=data;
            this.panierItems.forEach((element: ItemCarts) =>{

            });
            
        })
        .catch((err)=>{
          console.log('erreur',err);
        });
  }

  incrementQty(value:any,i){
    this.storage.get('cart').then((data: ItemCarts[]) => {
    const initialvalue=1;
    if(value>0){
      const afterclick=value+1;
      return(this.panierItems[i].qty=afterclick)
    }else {return(this.panierItems[i].qty=initialvalue+1)}
  })
  this.storage.set('cart',this.panierItems)
  }

  decrementQty(value:any,i){
    this.storage.get('cart').then((data: ItemCarts[]) => {
    const initialvalue=1;
    if(value>0){
      const afterclick=value-1;
      return(this.panierItems[i].qty=afterclick)
    }else {return(this.panierItems[i].qty=initialvalue-1)}
    
  })
  this.storage.set('cart',this.panierItems)
  }

  getTotalCost() {
    let total = 0;
    for (var i = 0; i < this.panierItems.length; i++) {
    this.panierItems[i].item.prix_u;
            this.totalSum = this.panierItems[i].item.prix_u * this.panierItems[i].qty;
            total = total + this.totalSum
        }
  return total;
}


  // Back to home page
  close() {
    this.router.navigate(['/patisseries']);
  }
  closeModal(): void {
    this.modal.dismiss();
  }

  goToLoginClient(){
    this.closeModal();
    this.router.navigateByUrl('/login-client');
  }
}
