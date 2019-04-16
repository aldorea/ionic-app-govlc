import {Place} from '../../models/places.model';
import { Component, OnInit, ViewChild, TemplateRef, OnChanges } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import {  Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.page.html',
  styleUrls: ['./monuments.page.scss']
})
export class MonumentsPage implements OnInit {

  private _monumentsList: Array<Place> = [];
  private searchMonu: Array<Place> = [];



  constructor(private placesService: PlacesService) {
    this._monumentsList = this.placesService.getPlacesCSV();
  }

  ngOnInit() {
    console.log(this._monumentsList);
    console.log(this.searchMonu);
  }

  filterMonumentsByTxt(text) {
    console.log(text);
     this._monumentsList = this._monumentsList.filter(monument => {
      return monument.getNombre().toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    console.log(this._monumentsList);
  }

  reloadPlaces() {
    this._monumentsList = this.placesService.getPlacesCSV().sort();
  }
}
