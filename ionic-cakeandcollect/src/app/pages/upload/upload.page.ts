import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
    const title = 'JavaSampleApproach';
    const description = 'Angular-SpringBoot Demo';
  }

  navigateToFormUpload(){
    this.router.navigate(['/upload/form-upload']);
  }

  navigateToListUpload(){
    this.router.navigate(['/upload/list-upload']);
  }

}
