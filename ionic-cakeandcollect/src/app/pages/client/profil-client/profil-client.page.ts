/* eslint-disable @typescript-eslint/naming-convention */
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Client } from 'src/app/interfaces/Client';
import { ClientsService } from 'src/app/shared/clients.service';
import { UploadFileService } from 'src/app/shared/upload-file.service';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.page.html',
  styleUrls: ['./profil-client.page.scss'],
})
export class ProfilClientPage implements OnInit {

  editProfilForm: FormGroup;
  client: Client = {};
  id: any;
  imgUpload;
  path: string;
  destination: string;
  imageName: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private formBuilder: FormBuilder, private zone: NgZone, private router: Router,
    private clientService: ClientsService, private route: ActivatedRoute,
    private toast: ToastController, private uploadService: UploadFileService) { }

  ngOnInit() {
    this.editProfilForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      email: [''],
      tel: [''],
      rue: [''],
      code_postal: [''],
      ville: [''],
      img: [''],
      mdp: ['']
    });

    this.id = this.route.snapshot.params.id;

    this.clientService.getClient(this.id).subscribe(client => {
      console.log(client);
      this.client = client;
      this.editProfilForm.patchValue({
        nom: client.nom,
        prenom: client.prenom,
        email: client.email,
        tel: client.tel,
        rue: client.rue,
        code_postal: client.code_postal,
        ville: client.ville,
        img: client.img,
        mdp: '',
      });
    });
  }

  // 1) selectionner l'image et la charger en même temps
  selectFile(event) {
    this.selectedFiles = event.target.files;
    const file = event.target.files[0];
    this.imgUpload = file;
    console.log(this.selectedFiles);
    console.log(file);
    this.upload(); // recharger image à la sélection de celle-ci pour affecter le path
    // Important !
    this.imageName = this.currentFileUpload.name;
    this.path = '/assets/images/uploads/' + this.imageName;
    this.client.img = this.path;
    this.editProfilForm.value.img = this.path;
    console.log(this.editProfilForm.value.img);
  }

  // 2) charger l'image afin d'obtenir ses infos en concole
  upload() {
    this.path = '/assets/images/uploads/' + this.imageName;
    this.editProfilForm.value.img = this.path;
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);

    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  // Mise à jour des données du client
  updateProfile() {
    const formData = new FormData();
    formData.append('file', this.imgUpload);
    console.log('L\'image sauvegardée dans le dossier du serveur : ' + this.imgUpload);
    // 3) Envoyer l'image sélectionnée au dossier distant (server)
    this.uploadService.addImageForm(formData).subscribe(imageData => {
      this.editProfilForm.value.img = this.path; // important!

      console.log(imageData);
      this.path = '/assets/images/uploads/' + this.imageName;
      console.log('le chemin de l\'image ' + this.path);

      // affecter la nouvelle url à l'img client
      this.client.img = this.path;

      // Enregistrer les données du client et son image choisie => màj bdd
      this.clientService.updateClient(this.id, this.editProfilForm.value).subscribe(
        async data => {
          this.zone.run(() => this.router.navigate(['espace-client', this.client.id]));
          const toast = await this.toast.create({
            message: 'Votre profil a bien été mis à jour !',
            duration: 5000
          });
          toast.present();
        });
    });
  }

  gotToEspaceClient() {
    this.router.navigate(['espace-client', this.id]);
  }

}
