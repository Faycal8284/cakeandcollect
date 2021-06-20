import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  submitted=false;
  contactForm :FormGroup;
  constructor(public formBuilder: FormBuilder, private contactService:  ContactService, private toast: ToastController) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      mail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  get f(){ return this.contactForm.controls};

  saveContact() {

    this.submitted=true;
    if (this.contactForm.invalid) {
      return;
  }
    this.contactService.addContact(this.contactForm.value).subscribe(async data => {
      let toast = await this.toast.create({
        message: 'Message Sent',
        duration: 2500
      });
      toast.present();
    })
  }
}
