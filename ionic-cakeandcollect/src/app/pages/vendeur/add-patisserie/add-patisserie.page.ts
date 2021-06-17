/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UploadFileService } from 'src/app/shared/upload-file.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-patisserie',
  templateUrl: './add-patisserie.page.html',
  styleUrls: ['./add-patisserie.page.scss'],
})
export class AddPatisseriePage implements OnInit {

  id = this.route.snapshot.params.id;
  imgUpload;
  path: string;
  destination: string;
  imageName: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  registerForm: any = {
    nom: null,
    vendeurId: this.id,
    categorieId: null,
    commandeId: null,
    disponible: 1,
    descriptions: null,
    ingredients: null,
    prix_u: null,
    stock: null,
    img: null,
    img1: null,
    img2: null,
    img3: null,
    quantite: null
  };

  isAdded = false;
  isAddedFailed = false;
  errorMessage = '';
  patisserie: Patisserie = {};

  constructor(private route: ActivatedRoute, private patisseriesServices: PatisseriesService,
    private router: Router, private http: HttpClient, private form: FormBuilder,
    private uploadService: UploadFileService, private toast: ToastController) { }

  ngOnInit() {
    console.log("L'id du vendeur qui ajoute " + this.id);
  }

  // 1) selection image et la charger
  selectFile(event) {
    this.selectedFiles = event.target.files;
    const file = event.target.files[0];
    this.imgUpload = file;
    console.log(this.selectedFiles);
    console.log(file);
    this.upload(); //charger image à la sélection de celle-ci
  }

  // 2) sinon, si boutton html actif => charger l'image afin d'obtenir ses infos en concole
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log(this.currentFileUpload.name);
        this.imageName = this.currentFileUpload.name;
      }
    });
    this.selectedFiles = undefined;
  }

  // 3) Soumettre l'enregistrement du formulaire
  isRegistred() {

    const { nom, vendeurId, categorieId, commandeId, disponible, descriptions, ingredients, prix_u, stock, img, img1, img2, img3, quantite } = this.registerForm;
    this.patisserie = this.registerForm;

    // 1) Envoyer l'image sélectionnée au dossier distant (server)
    const formData = new FormData();
    formData.append('file', this.imgUpload);
    console.log("L'image sauvegardée dans le dossier du serveur : " + this.imgUpload);
    this.uploadService.addImageForm(formData).subscribe(imageData => {

      console.log(imageData);
      //this.path = imageData.destination + '/' + imageData.filename;
      this.path = '/assets/images/uploads/patisseries/' + imageData.filename; // url img dans la table patisserie
      console.log("le chemin de l'image " + this.path);

      // affecter la nouvelle url à l'img patisserie
      this.patisserie.img = this.path;

      // Enregistrer la patisserie
      this.patisseriesServices.addPatisserie(this.patisserie).subscribe(
        async data => {
          console.log(data);
          // enregistrer url img
          this.patisserie.img = this.path;
          console.log(this.patisserie.img);
          console.log("nom path image : " + this.path);
          console.log(this.registerForm);

          //this.router.navigate(['mes-patisseries', this.id]);
          this.isAdded = true;
          this.isAddedFailed = false;

          let toast = await this.toast.create({
             message: 'Patisserie ajoutée avec succès !',
             duration: 6000
           });
           toast.present();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isAddedFailed = true;
        }
      );
    });
  }

  goToEspaceVendeur(id) {
    this.router.navigate(['espace-vendeur', id]);
  }

}
