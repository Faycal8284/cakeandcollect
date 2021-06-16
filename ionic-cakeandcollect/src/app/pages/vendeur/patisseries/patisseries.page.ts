/* eslint-disable eol-last */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import { VenpatcatService } from 'src/app/shared/venpatcat.service';
//import { TimeTracker } from 'src/app/decorators/timeTracker.decorator';

@Component({
  selector: 'app-patisseries',
  templateUrl: './patisseries.page.html',
  styleUrls: ['./patisseries.page.scss'],
})

//@TimeTracker("patisserie")
export class PatisseriesPage implements OnInit {

  id: any;
  vendeur: any = {};
  patisserie: any = {};
  patisseries: any = [];
  patisseriesVendeur: any = [];
  storageStatus: any ;

  constructor(private router: Router, private route: ActivatedRoute, private toast: ToastController,
              private patisseriesServices: PatisseriesService, private venpatcatServices: VenpatcatService) { }

  ngOnInit() {
    this.getAllPatisseriesVendeur(null);
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }

  getAllPatisseriesVendeur(event) {
    this.id = this.route.snapshot.params.id;
    console.log('Id vendeur : ' + this.id);

    this.venpatcatServices.getVendeur(this.id).subscribe(data => {
      console.log('Mes patisseries dispoibles : ' + JSON.stringify(data));
      this.patisseries = data;

      if (event){
        event.target.complete();
      }
    }, error => {
      console.log(error);

      if (event) {
        event.target.complete();
      }
    });

}

goToPatisserieDetails(id){
  this.router.navigate(['patisserie', id]);
}

goToEspaceVendeur(id){
  this.router.navigate(['espace-vendeur', id]);
}

goToEditPatisserie(id){
  this.router.navigate(['edit-patisserie', id]);
}


deletePatisserie(id: any) {
 this.patisseriesServices.deletePatisserie(id).subscribe(async data => {
  console.log("Patisserie supprimée : " + JSON.stringify(data));

   let toast = await this.toast.create({
      message: 'Patisserie supprimée avec succès !',
      duration: 2500
    });
    toast.present();
    this.getAllPatisseriesVendeur(null);
  });

}


}