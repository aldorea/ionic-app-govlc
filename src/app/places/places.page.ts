import { Component, OnInit } from '@angular/core';
import { PlacesService } from './shared/places.service';
import { Place } from '../models/places.model';



@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  private uploadJson: Array<Place>;



  constructor(private placeService: PlacesService) {}

  ngOnInit() {

}

}
