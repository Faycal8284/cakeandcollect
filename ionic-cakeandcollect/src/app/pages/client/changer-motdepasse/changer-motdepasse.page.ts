import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/shared/clients.service';

@Component({
  selector: 'app-changer-motdepasse',
  templateUrl: './changer-motdepasse.page.html',
  styleUrls: ['./changer-motdepasse.page.scss'],
})
export class ChangerMotdepassePage implements OnInit {

  changerMdpForm: FormGroup;
  type = true;
  client: any = {};
  id: any;

  constructor(public formBuilder: FormBuilder, private zone: NgZone, private router: Router,
              private clientService: ClientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.changerMdpForm = this.formBuilder.group({
      mdp: ['']
    });
    this.id = this.route.snapshot.params.id;

    this.clientService.getClient(this.id).subscribe(data =>{
      console.log(data);
      this.client = data;
      this.changerMdpForm.patchValue({
        mdp: '',
      });
    });
  }

  changeType() {
    this.type = !this.type;
  }

  modifier(){
    this.clientService.updateClient(this.id, this.changerMdpForm.value).subscribe(data => {
      console.log('Mot de passe modifié avec ' + data);
      this.zone.run(() => this.router.navigate(['espace-client', this.client.id]));
    });
  }

  gotToEspaceClient() {
    this.router.navigate(['espace-client', this.id]);
  }


}
