import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import { Place } from 'src/app/models/places.model';
import {  Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.page.html',
  styleUrls: ['./monuments.page.scss']
})
export class MonumentsPage implements OnInit {
  private _monumentsList: Array<Place>;

  constructor(private placesService: PlacesService,
              private _router: Router,
              ){

    this._monumentsList = [];
  }

  ngOnInit() {
    this._monumentsList = this.placesService.getPlacesCSV();
    console.log(this._monumentsList)
  }

  showDetail(item: Place) {
    this._router.navigate(['/tabs/monuments/', JSON.stringify(item)]);
  }
}
