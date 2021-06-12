/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { PatisseriesService } from 'src/app/shared/patisseries.service';

@Component({
  selector: 'app-edit-patisserie',
  templateUrl: './edit-patisserie.page.html',
  styleUrls: ['./edit-patisserie.page.scss'],
})
export class EditPatisseriePage implements OnInit {

  /* editForm: any = {
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


  isEdited = false;
  isEditedFailed = false;
  errorMessage = ''; */
  patisserie: Patisserie = {};

  editForm: FormGroup;
  id: any;

  constructor(public formBuilder: FormBuilder, private zone: NgZone, private route: ActivatedRoute, private patisseriesServices: PatisseriesService, private router: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nom: [''],
      categorieId: [''],
      disponible: [''],
      descriptions: [''],
      ingredients: [''],
      prix_u: [''],
      stock: [''],
      img: ['']
    });

    this.id = this.route.snapshot.params['id'];

    this.patisseriesServices.getPatisserie(this.id).subscribe(data =>{
      console.log(data);
      console.log(data.nom);
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

  saveForm(){
    this.patisseriesServices.updatePatisserie(this.id, this.editForm.value).subscribe(data => {
      console.log("Edit patisserie :" + data);
      this.zone.run(() => this.router.navigate(['mes-patisseries', this.patisserie.vendeurId]));
    });
  }

  goToPatisseriesOfVendeur(id){
    this.router.navigate(['mes-patisseries', id]);
  }


    /* console.log(this.editForm);
    const { nom, vendeurId, categorieId, commandeId, disponible, descriptions, ingredients, prix_u, stock, img, img1, img2, img3, quantite } = this.editForm;
    this.patisserie = this.editForm;

    this.patisseriesServices.getPatisserie(this.id)
      .subscribe(
        data => {
          console.log(data);

          this.editForm.patchValue({
            nom: data.nom,
            categorieId: data.categorieId,
            descriptions: data.descriptions,
            ingredients: data.ingredients,
            prix_u: data.prix_u,
            stock: data.stock,
            img: data.img
          });

           this.router.navigate(['espace-vendeur', this.id]);
          this.isEdited = true;
          this.isEditedFailed = false; 
        },
        err => {
          this.errorMessage = err.error.message;
          this.isEditedFailed = true;
        }
      );
  }


  isModifed() {
    this.patisseriesServices.updatePatisserie(this.id, this.editForm.value).subscribe(data => {
      console.log("Edit patisserie :" + data);
      //this.zone.run(() => this.router.navigate(['user']));
    })
  }

  loadImageFromDevice(event) {
    console.log(event);

    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();
    console.log(reader);

    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
      // create blobURL, such that we could use it in an image element:
      let blobURL: string = URL.createObjectURL(blob);

      //this.yourImageDataURL = dataReader.result;

    };

    reader.onerror = (error) => {

      console.log(error);
      //handle errors

    };
  }; */


}
