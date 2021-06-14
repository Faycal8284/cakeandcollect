import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarts } from 'src/app/interfaces/item-carts';
import { Storage } from '@ionic/storage-angular';
import { ModalController, NavController,ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {
  panierItems: ItemCarts[];
  total: number = 0;

  constructor(
    private storage: Storage,
    private router: Router,
    public modal: ModalController,
    public navCtrl: NavController
  ) {}

  ionViewDidEnter():void {
          this.storage.get("cart").then((data:ItemCarts[]) => {
            this.panierItems=data
            this.panierItems.forEach((element:ItemCarts) =>{
            
            this.total += (element.item.prix_u * element.qty)
            });
        })
        .catch((err)=>{
          console.log('erreur',err)
        })
      

        // this.panierItems.forEach((element:ItemCarts) =>{
        //   if(element.item.disponible== true)
        //   this.total += (element.item.prix_u * element.qty)
        // })
      
  }

  // Back to home page
  close() {
    this.router.navigate(['/patisseries']);
  }
  closeModal(): void {
    this.modal.dismiss();
  }
}
