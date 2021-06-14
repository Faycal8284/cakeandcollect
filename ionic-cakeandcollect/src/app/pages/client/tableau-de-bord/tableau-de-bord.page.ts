import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.page.html',
  styleUrls: ['./tableau-de-bord.page.scss'],
})
export class TableauDeBordPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  constructor() { }

  ngOnInit() {
  }

  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
