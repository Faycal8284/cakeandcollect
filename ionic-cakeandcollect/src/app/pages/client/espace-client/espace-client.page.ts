import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/interfaces/Client';
import { ClientsService } from 'src/app/shared/clients.service';

@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.page.html',
  styleUrls: ['./espace-client.page.scss'],
})
export class EspaceClientPage implements OnInit {

  client: Client = {};
  id!: any;

  constructor(private router: Router, private clientService: ClientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.clientService.getClient(this.id).subscribe(data => {
      this.client = data;
    });
  }

  signout() {
    this.router.navigate(['/accueil']);
  }

  gotToModifierMotDePasse(id: any){
    this.router.navigate(['changer-motdepasse-client', id]);
  }

  goToModeDePaiement() {
    this.router.navigate(['/mode-de-paiement']);
  }

  goToDeviceInformation(id: any){
    this.router.navigate(['parametres', id]);
  }

  editProfileClient(id: any){
    this.router.navigate(['profil-client', id]);
  }

}
