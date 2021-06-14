import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-screen-client',
  templateUrl: './auth-screen-client.page.html',
  styleUrls: ['./auth-screen-client.page.scss'],
})
export class AuthScreenClientPage implements OnInit {

  segmentValue = '1';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    console.log(event);
    this.segmentValue = event.detail.value;
    //event.preventDefault();
    event.stopPropagation();
    //event.srcEvent.stopPropagation();
  }

}
