/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, ToastController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { Client } from 'src/app/interfaces/Client';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/shared/clients.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  constructor(private device: Device, private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder, private clientService: ClientsService,
              private toast: ToastController) { }

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  //device: any;
  id = this.route.snapshot.params.id;
  uuid: any;
  cordova: any;
  platform: any;
  model: any;
  version: any;
  manufacturer: any;
  isVirtual: any;
  serial: any;

  editProfilForm: FormGroup;
  client: Client = {};
  imgUpload;
  path: string;
  destination: string;
  imageName: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  ngOnInit() {
    console.log('Device UUID is: ' + this.device.uuid);
    this.uuid = this.device.uuid;
    this.model = this.device.model;
    this.version = this.device.version;
    this.platform = this.device.platform;
    this.cordova = this.device.cordova;
    this.manufacturer = this.device.manufacturer;
    this.isVirtual = this.device.isVirtual;
    this.serial = this.device.serial;

    this.editProfilForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      tel: [''],
      rue: [''],
      code_postal: [''],
      ville: [''],
      mdp:['']
    });

    this.id = this.route.snapshot.params.id;

    this.clientService.getClient(this.id).subscribe(client => {
      console.log(client);
      this.client = client;
      this.editProfilForm.patchValue({
        nom: client.nom,
        prenom: client.prenom,
        tel: client.tel,
        rue: client.rue,
        code_postal: client.code_postal,
        ville: client.ville,
        mdp: ''
      });
    });

  }

  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  gotToEspaceClient() {
    this.router.navigate(['espace-client', this.id]);
  }

  // Mise à jour des données du client
  updateProfile() {
    // Enregistrer les données du client et son image choisie => màj bdd
    this.clientService.updateClient(this.id, this.editProfilForm.value).subscribe(
      async data => {
        const toast = await this.toast.create({
          message: 'Votre profil est à jour !',
          duration: 5000
        });
        toast.present();
      });
  }

}
