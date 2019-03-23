import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { Place } from './places.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  uploadJson: Array<Place>;

  constructor(private placeService: PlacesService) {}

  ngOnInit() {
  this.uploadJson = this.placeService.getPlaces();
  console.log(this.uploadJson);
  }

}
