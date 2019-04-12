import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../shared/places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/models/places.model';


@Component({
  selector: 'app-monument-detail',
  templateUrl: './monument-detail.page.html',
  styleUrls: ['./monument-detail.page.scss'],
})
export class MonumentDetailPage implements OnInit {

monument: Place;
visitado: boolean;

  constructor(private placeService: PlacesService,
              private activatedRoute: ActivatedRoute) {
    this.visitado = false;

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      
      this.monument = this.placeService.getMonumentById(params['id']);
      console.log(this.monument)
    });
  }


  // mirar como funciona con params
  // setVisitado(visit: boolean) {
  // }

}
