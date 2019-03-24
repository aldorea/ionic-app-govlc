import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { Place } from './places.model';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  private uploadJson: Array<Place>;
  private csvFile;


  constructor(private placeService: PlacesService) {}

  ngOnInit() {
  this.uploadJson = this.placeService.getPlaces();


  this.placeService.readFile();


}

}