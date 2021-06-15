import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {
  title = 'fileUpload';
  images;
  multipleImages = [];

  constructor(private http: HttpClient, private form: FormBuilder) { }

  ngOnInit() {

  }

  selectImage(event) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event) {
    if(event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:8080/file', formData).subscribe(
      (res) =>  console.log(res),
      (err) => console.log(err)
    );
  }

  onMultipleSubmit(){
    const formData = new FormData();
    for(const img of this.multipleImages){
      formData.append('files', img);
    }

    this.http.post<any>('http://localhost:8080/multiplefiles', formData).subscribe(
      (res) =>  console.log(res),
      (err) => console.log(err)
    );
  }

}
