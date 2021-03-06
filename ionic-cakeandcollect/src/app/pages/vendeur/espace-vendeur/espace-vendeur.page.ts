import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendeur } from 'src/app/interfaces/Vendeur';
import { VendeursService } from 'src/app/shared/vendeurs.service';

@Component({
  selector: 'app-espace-vendeur',
  templateUrl: './espace-vendeur.page.html',
  styleUrls: ['./espace-vendeur.page.scss'],
})
export class EspaceVendeurPage implements OnInit {

  vendeur: Vendeur = {};
  id!: any;

  constructor(private router: Router, private vendeurService: VendeursService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id; // l'id du vendeur
    this.vendeurService.getVendeur(this.id).subscribe(data => {
      console.log(data);
      this.vendeur = data;
    });
  }

  signout() {
    this.router.navigate(['/accueil']);
  }

  goToPatisseriesOfVendeur(id){
    this.router.navigate(['mes-patisseries', id]);
  }

  goToAddPatisserie(id){
    this.router.navigate(['ajouter-patisserie', id]);
  }

  gotToModifierMotDePasse(id: any){
    this.router.navigate(['changer-motdepasse-vendeur', id]);
  }
  editProfileVendeur(id: any){
    this.router.navigate(['profil-vendeur', id]);
  }
}
