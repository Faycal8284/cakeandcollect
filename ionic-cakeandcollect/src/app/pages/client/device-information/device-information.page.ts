/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Device } from '@ionic-native/device/ngx';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-device-information',
  templateUrl: './device-information.page.html',
  styleUrls: ['./device-information.page.scss'],
})
export class DeviceInformationPage implements OnInit {

  constructor(private device: Device, private route: ActivatedRoute) { }

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  //device: any;
  id = this.route.snapshot.params.id;
  uuid: any;
  cordova: any;
  platform: any;
  model: any;
  version: any;


  ngOnInit() {
    console.log('Device UUID is: ' + this.device.uuid);
    this.uuid = this.device.uuid;
    this.model = this.device.model;
    this.version = this.device.version;
    this.platform = this.device.platform;
    this.cordova = this.device.cordova;
  }

  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }


}
