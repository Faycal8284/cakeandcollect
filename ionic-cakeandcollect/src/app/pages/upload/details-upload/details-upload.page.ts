import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.page.html',
  styleUrls: ['./details-upload.page.scss'],
})
export class DetailsUploadPage implements OnInit {

  @Input() fileUpload: string;

  constructor() { }

  ngOnInit() {
  }

}
