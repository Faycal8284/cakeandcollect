import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

const modules: any[] = [
  CommonModule,
  NgxNavbarModule
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cakeandcollect-project';
}



