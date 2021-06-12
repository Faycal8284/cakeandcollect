import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import { VenpatcatService } from 'src/app/shared/venpatcat.service';

@Component({
  selector: 'app-patisseries',
  templateUrl: './patisseries.page.html',
  styleUrls: ['./patisseries.page.scss'],
})
export class PatisseriesPage implements OnInit {

  id: any;
  vendeur: any = {};
  patisserie: any = {};
  patisseries: any = [];
  patisseriesVendeur: any = [];

  constructor(private router: Router, private route: ActivatedRoute,
    private patisseriesServices: PatisseriesService, private venpatcatServices: VenpatcatService) { }

  ngOnInit() {
    this.getAllPatisseriesVendeur(null);
    //this.doRefresh(null);
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

doRefresh(event) {
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

}
