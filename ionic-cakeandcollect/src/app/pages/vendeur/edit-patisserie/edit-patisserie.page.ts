/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, NgZone, OnInit, Directive } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { PatisseriesService } from 'src/app/shared/patisseries.service';
import { UploadFileService } from 'src/app/shared/upload-file.service';

@Component({
  selector: 'app-edit-patisserie',
  exportAs: 'editForm',
  templateUrl: './edit-patisserie.page.html',
  styleUrls: ['./edit-patisserie.page.scss'],
})
export class EditPatisseriePage implements OnInit {

  patisserie: Patisserie = {};
  editForm: FormGroup;
  id = this.route.snapshot.params.id;
  imgUpload;
  path: string;
  destination: string;
  imageName: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private form: FormBuilder, private zone: NgZone, private route: ActivatedRoute,
              private patisseriesServices: PatisseriesService, private router: Router,
              private uploadService: UploadFileService, private toast: ToastController) { }

  ngOnInit() {
    // Initialiser le formulaire
    this.editForm = this.form.group({
      nom: [''],
      categorieId: [''],
      disponible: [''],
      descriptions: [''],
      ingredients: [''],
      prix_u: [''],
      stock: [''],
      img: ['']
    });

    // Récupérer la patisserie à modifier
    this.patisseriesServices.getPatisserie(this.id).subscribe(data =>{
      console.log(data);
      this.patisserie = data;
      this.editForm.patchValue({
        id: this.id,
        nom: data.nom,
        categorieId: data.categorieId,
        disponible: data.disponible,
        descriptions: data.descriptions,
        ingredients: data.ingredients,
        prix_u: data.prix_u,
        stock: data.stock,
        img: data.img
      });
    });
  }

   // 1) selection image et la charger
 selectFile(event) {
  this.selectedFiles = event.target.files;
  const file = event.target.files[0];
  this.imgUpload = file;
  console.log(this.selectedFiles);
  console.log(file);
  this.upload(); //charger image à la sélection de celle-ci
  this.imageName = this.currentFileUpload.name;
  this.path = '/assets/images/uploads/' + this.imageName;
  this.patisserie.img = this.path;
  console.log(this.editForm.value.img);
  this.editForm.value.img = this.path;
  this.editForm.value.img.replace(this.editForm.value.img, this.path);
}

 // 2) sinon, si boutton html actif => charger l'image afin d'obtenir ses infos en concole
 upload() {
  this.path = '/assets/images/uploads/' + this.imageName;
  this.editForm.value.img = this.path;
  this.progress.percentage = 0;
  this.currentFileUpload = this.selectedFiles.item(0);
  this.imageName = this.currentFileUpload.name;

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

  modifier(){
     const formData = new FormData();
    formData.append('file', this.imgUpload);
    console.log("L'image sauvegardée dans le dossier du serveur : " + this.imgUpload);
 // 1) Envoyer l'image sélectionnée au dossier distant (server)
    this.uploadService.addImageForm(formData).subscribe(imageData => {
      this.editForm.value.img = this.path;

      console.log(imageData);
      this.path = '/assets/images/uploads/' + this.imageName;
      console.log("le chemin de l'image " + this.path);

      // affecter la nouvelle url à l'img patisserie
      this.patisserie.img = this.path;

      // Enregistrer la patisserie avec son image chargée
      this.patisseriesServices.updatePatisserie(this.id, this.editForm.value).subscribe(async data => {

        // enregistrer url img
        this.editForm.value.img = this.path;
        this.patisserie.img = this.path;
        console.log(this.patisserie);
        console.log(this.editForm.value.img);

        this.zone.run(() => this.router.navigate(['mes-patisseries', this.patisserie.vendeurId]));
        let toast = await this.toast.create({
          message: 'Patisserie modifiée avec succès !',
          duration: 6000
        });
        toast.present();
      });

    });
  }

  goToPatisseriesOfVendeur(id){
    this.router.navigate(['mes-patisseries', id]);
  }

}
