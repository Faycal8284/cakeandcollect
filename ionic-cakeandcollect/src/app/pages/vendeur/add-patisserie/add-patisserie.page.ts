/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { PatisseriesService } from 'src/app/shared/patisseries.service';

import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-add-patisserie',
  templateUrl: './add-patisserie.page.html',
  styleUrls: ['./add-patisserie.page.scss'],
})
export class AddPatisseriePage implements OnInit {

  id = this.route.snapshot.params.id;

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
              private router: Router ) { }

  ngOnInit() {
    console.log("L'id du vendeur qui ajoute " + this.id);

    /* this.fileChooser.open() private fileChooser: FileChooser
          .then(uri => console.log(uri))
          .catch(e => console.log(e)); */
  }

  isRegistred() {
    console.log(this.registerForm);
    const { nom, vendeurId, categorieId, commandeId, disponible, descriptions, ingredients, prix_u, stock, img, img1, img2, img3, quantite } = this.registerForm;
    this.patisserie = this.registerForm;

    this.patisseriesServices.addPatisserie(this.patisserie)
      .subscribe(
        data => {
          console.log(data);

          this.router.navigate(['mes-patisseries', this.id]);
          this.isAdded = true;
          this.isAddedFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isAddedFailed = true;
        }
      );
  }

  loadImageFromDevice(event) {
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
  };

  goToEspaceVendeur(id){
    this.router.navigate(['espace-vendeur', id]);
  }

}
