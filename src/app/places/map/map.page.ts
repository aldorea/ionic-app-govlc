/// <reference types="@types/googlemaps" />

import { Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import { Place } from 'src/app/models/places.model';



@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

@ViewChild('map') mapElement: any;
 map: any;
 markers: Array<Place> = [];

  constructor(private placeService: PlacesService) {
    this.markers = this.placeService.getPlacesJSON();
  }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    // console.log(this.markers);
    const coords = new google.maps.LatLng(39.47, -0.38);
    const mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker;

    this.markers.forEach(place => {

      const coords = { lat: place.latitude, lng: place.longitude };

      const infoWindow = new google.maps.InfoWindow({
        content: place.getNombre(),
        position: coords
      });

      // Setting up marker
      marker = new google.maps.Marker({
        map: this.map,
        position: coords,
        title: place.getNombre()
      });

      // Information about the market clicking them
      marker.addListener('click', function() {
        infoWindow.open(this.map, this);
      });
    });
  }
}
