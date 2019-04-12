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
    let coords = new google.maps.LatLng(39.47, -0.38);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker;

    this.markers.forEach(place => {

      const coords = { lat: place.latitude, lng: place.longitude }

      let infoWindow = new google.maps.InfoWindow({
        content: place.getNombre(),
        position: coords
      });

      marker = new google.maps.Marker({
        map: this.map,
        position: coords,
        title: place.getNombre()
      });

      marker.addListener('click', function() {
        infoWindow.open(this.map, this);
      });
    });
  }
}
