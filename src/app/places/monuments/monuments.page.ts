import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from 'src/app/models/places.model';

@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.page.html',
  styleUrls: ['./monuments.page.scss']
})
export class MonumentsPage implements OnInit {
  private _monumentsList: Array<Place>;
  constructor(private placesService: PlacesService) {
    this._monumentsList = [];
  }
 
  ngOnInit() {
    this._monumentsList = this.placesService.getPlacesCSV();
  }
}
