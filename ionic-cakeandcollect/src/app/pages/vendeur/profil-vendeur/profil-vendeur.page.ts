/* eslint-disable @typescript-eslint/naming-convention */
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vendeur } from 'src/app/interfaces/Vendeur';
import { UploadFileService } from 'src/app/shared/upload-file.service';
import { VendeursService } from 'src/app/shared/vendeurs.service';

@Component({
  selector: 'app-profil-vendeur',
  templateUrl: './profil-vendeur.page.html',
  styleUrls: ['./profil-vendeur.page.scss'],
})
export class ProfilVendeurPage implements OnInit {

  editProfilForm: FormGroup;
  vendeur: Vendeur = {};
  id: any;
  imgUpload;
  path: string;
  destination: string;
  imageName: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private formBuilder: FormBuilder, private zone: NgZone, private router: Router,
    private vendeurService: VendeursService, private route: ActivatedRoute,
    private toast: ToastController, private uploadService: UploadFileService) { }

  ngOnInit() {
    console.log(this.vendeur.img);
    this.editProfilForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      siret: [''],
      email: [''],
      categorie: [''],
      code_promo: [''],
      particulier: [''],
      tel: [''],
      descriptions: [''],
      rue: [''],
      code_postal: [''],
      ville: [''],
      img: new FormControl('', Validators.required),
      mdp: ['']
    });

    this.id = this.route.snapshot.params.id;

    this.vendeurService.getVendeur(this.id).subscribe(vendeur => {
      console.log(vendeur);
      this.vendeur = vendeur;
      this.editProfilForm.patchValue({
        nom: vendeur.nom,
        prenom: vendeur.prenom,
        siret: vendeur.siret,
        email: vendeur.email,
        categorie: vendeur.categorie,
        code_promo: vendeur.code_promo,
        particulier: vendeur.particulier,
        tel: vendeur.tel,
        desciptions: vendeur.desciptions,
        rue: vendeur.rue,
        code_postal: vendeur.code_postal,
        ville: vendeur.ville,
        img: vendeur.img,
        mdp: '',
      });
    });

    /* this.editProfilForm = this.formBuilder.group({
      img: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    }); */
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
    this.vendeur.img = this.path;
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

  // Mise à jour des données du vendeur
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

      // affecter la nouvelle url à l'img vendeur
      this.vendeur.img = this.path;

      // Enregistrer les données du vendeur et son image choisie => màj bdd
      this.vendeurService.updateVendeur(this.id, this.editProfilForm.value).subscribe(
        async data => {
          this.zone.run(() => this.router.navigate(['espace-vendeur', this.vendeur.id]));
          const toast = await this.toast.create({
            message: 'Votre profil a bien été mis à jour !',
            duration: 6000
          });
          toast.present();
        });
    });

  }

  gotToEspaceVendeur() {
    this.router.navigate(['espace-vendeur', this.id]);
  }


}
