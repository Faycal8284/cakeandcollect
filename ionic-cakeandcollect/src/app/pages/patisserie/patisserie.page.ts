import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patisserie } from 'src/app/interfaces/patisserie';
import { PatisseriesService } from 'src/app/shared/patisseries.service';

@Component({
  selector: 'app-patisserie',
  templateUrl: './patisserie.page.html',
  styleUrls: ['./patisserie.page.scss'],
})
export class PatisseriePage implements OnInit {
  id: any;
  patisserie: Patisserie = {};

  slideOpt1 = {
    initialSlide: 2,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: 'slide'
  };

  constructor(private router: Router, private patisseriesServices: PatisseriesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatisserie();
  }

  getPatisserie() {
    this.id = this.route.snapshot.params.id;
    this.patisseriesServices.getPatisserie(this.id).subscribe(patisserie => {
      console.log(patisserie);
      this.patisserie = patisserie;
    });
  }
  gotoPatisseriesPage() {
    this.router.navigateByUrl('/patisseries');
  }
  gotoPanierPage() {
    this.router.navigateByUrl('/panier');
  }

}
