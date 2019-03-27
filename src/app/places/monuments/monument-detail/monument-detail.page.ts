import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../shared/places.service';


@Component({
  selector: 'app-monument-detail',
  templateUrl: './monument-detail.page.html',
  styleUrls: ['./monument-detail.page.scss'],
})
export class MonumentDetailPage implements OnInit {

  private visitado: boolean;
  constructor(private placeService: PlacesService) {
    this.visitado = false;
  }

  ngOnInit() {
  }


  // mirar como funciona con params
  // setVisitado(visit: boolean) {
  // }

}
