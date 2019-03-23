import { Injectable } from '@angular/core';
import { Place } from './places.model';
// import * as papa from 'papaparse';
import * as data from '../../assets/monumentos-turisticos.json';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private place: Place;
private _place: Array<Place> = [];

  getPlaces(): Array<Place> {
    data.features.forEach(monument => {
        this.place = new Place();
        this.place.idVia = parseInt(monument.properties.codvia, 10);
        this.place.name = monument.properties.nombre;
        this.place.route = parseInt(monument.properties.ruta, 10);
        this.place.numPortal = parseInt(monument.properties.numpol, 10);
        this.place.phone = parseInt(monument.properties.telefono, 10);
        this.place.idNotes = parseInt(monument.properties.idnotes, 10);
        //console.log(this.place);
         this._place.push(this.place);
    });
   
    return this._place;
  }
  constructor() { }
}
