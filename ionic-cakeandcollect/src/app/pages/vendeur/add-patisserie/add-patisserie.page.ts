/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { PatisseriesService } from 'src/app/shared/patisseries.service';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
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
  title = 'fileUpload';
  //images;
  img;
  path: string;
  destination: string;

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
  nomImage: any;

  constructor(private route: ActivatedRoute, private patisseriesServices: PatisseriesService,
    private router: Router, private http: HttpClient, private form: FormBuilder,
    private uploadService: UploadFileService, private toast: ToastController) { }

  ngOnInit() {
    console.log("L'id du vendeur qui ajoute " + this.id);
  }

  // 1) sélectionner une image
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.img = file;
      //file.value.replace("C:\\fakepath\\", "");
      this.nomImage = file.name;
    }
  }

  isRegistred() {

    const { nom, vendeurId, categorieId, commandeId, disponible, descriptions, ingredients, prix_u, stock, img, img1, img2, img3, quantite } = this.registerForm;

    this.patisserie = this.registerForm;

    this.patisseriesServices.addPatisserie(this.patisserie)
      .subscribe(
        async data => {
          // upload image et ajouter au dossier distant
          const formData = new FormData();
          formData.append('file', this.img);
          console.log("L'image sauvegardée dans le dossier du serveur : " + this.img);
          this.uploadService.addImageForm(formData).subscribe(imageData => {

            console.log(imageData);
            this.path = imageData.destination + '/' + imageData.filename;
//            this.img = this.path;
            //this.img = this.nomImage;
            console.log("l'url du dossier de sauvegarde :" + this.path);

            // les données à récupérer et mettre dans la colonne img patisserie
            console.log(data);
            data.img = this.nomImage;
            console.log(data.img);

            //(res) =>  console.log(res),
            //(err) => console.log(err)
          });

          console.log("nom path image : " + this.path);
          console.log(this.registerForm);

          //this.img.value.replace("C:\\fakepath\\", this.path);

          //this.router.navigate(['mes-patisseries', this.id]);
          this.isAdded = true;
          this.isAddedFailed = false;

          /*  let toast = await this.toast.create({
             message: 'Patisserie ajoutée avec succès !',
             duration: 6000
           });
           toast.present(); */
        },
        err => {
          this.errorMessage = err.error.message;
          this.isAddedFailed = true;
        }
      );
  }

    uploadFile() {
      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('Image sauvegardée dans la table files : ' + this.currentFileUpload );
        }
      });
      this.selectedFiles = undefined;
    }

  /* selectFile(event) {
    this.selectedFiles = event.target.files;
  } */


  /*  loadImageFromDevice(event) {
     console.log("à l.78 => l'evenement sur l'jout d'un fichier : " );
     console.log(event);
     const file = event.target.files[0];
     console.log("le fichier : ");
     console.log(file);
     const reader = new FileReader();
     console.log("le reader  : ");
     console.log(reader);

     reader.readAsArrayBuffer(file);
     reader.onload = () => {
       // get the blob of the image:
       let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
       console.log("le blob : " );
       console.log(blob);
       // create blobURL, such that we could use it in an image element:
       let blobURL: string = URL.createObjectURL(blob);
       console.log("le blobURL : " );
       console.log(blobURL);

       //this.yourImageDataURL = dataReader.result;

     };

     reader.onerror = (error) => {

       console.log(error);
       //handle errors

     };
   }; */

  goToEspaceVendeur(id) {
    this.router.navigate(['espace-vendeur', id]);
  }

}
