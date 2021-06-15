import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/shared/upload-file.service';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.page.html',
  styleUrls: ['./list-upload.page.scss'],
})
export class ListUploadPage implements OnInit {

  showFile = false;
  fileUploads: Observable<any>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}
