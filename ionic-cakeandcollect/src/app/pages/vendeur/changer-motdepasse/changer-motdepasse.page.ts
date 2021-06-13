import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendeursService } from 'src/app/shared/vendeurs.service';

@Component({
  selector: 'app-changer-motdepasse',
  templateUrl: './changer-motdepasse.page.html',
  styleUrls: ['./changer-motdepasse.page.scss'],
})
export class ChangerMotdepassePage implements OnInit {

  changerMdpForm: FormGroup;
  type = true;
  vendeur: any = {};
  id: any;

  constructor(public formBuilder: FormBuilder, private zone: NgZone, private router: Router,
              private vendeurService: VendeursService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.changerMdpForm = this.formBuilder.group({
      mdp: ['']
    });
    this.id = this.route.snapshot.params.id;

    this.vendeurService.getVendeur(this.id).subscribe(data =>{
      console.log(data);
      this.vendeur = data;
      this.changerMdpForm.patchValue({
        mdp: '',
      });
    });
  }

  changeType() {
    this.type = !this.type;
  }

  modifierMdp(){
    this.vendeurService.updateVendeur(this.id, this.changerMdpForm.value).subscribe(data => {
      console.log('Mot de passe modifié avec ' + data);
      this.zone.run(() => this.router.navigate(['espace-vendeur', this.vendeur.id]));
    });
  }

  gotToEspaceVendeur() {
    this.router.navigate(['espace-vendeur', this.id]);
  }

}
