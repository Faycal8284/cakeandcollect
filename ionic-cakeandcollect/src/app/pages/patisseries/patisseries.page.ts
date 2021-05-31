/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatisseriesService } from 'src/app/shared/patisseries.service';


@Component({
  selector: 'app-patisseries',
  templateUrl: './patisseries.page.html',
  styleUrls: ['./patisseries.page.scss'],
})
export class PatisseriesPage implements OnInit {

  constructor(private patisseriesService: PatisseriesService, private router: Router) { }

  patisseries: any = [];

  ngOnInit() {
    this.getPatisseries();
  }

  getPatisseries() {
    this.patisseriesService.getAllPatisseries().subscribe(data => {
      console.log(data);
      this.patisseries = data;
    });
  }

  gotoAccueilPage() {
    this.router.navigate(['/accueil']);
  }

}
