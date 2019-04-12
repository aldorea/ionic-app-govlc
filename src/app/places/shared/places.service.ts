import { Injectable } from "@angular/core";
import { Place } from "../../models/places.model";
import * as data from "../../../assets/monumentos-turisticos.json";
import * as utm from 'utm';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Vias } from "../../models/vias.model";
import { TouchSequence } from "selenium-webdriver";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private place: Place;
  private via: Vias;
  private _place: Array<Place> = [];
  private viasData: Array<Vias> = [];

  constructor(private _http: HttpClient) {
    this.getPlacesJSON();
  }



  getPlacesJSON(): Array<Place> {
    data.features.forEach(monument => {
      const coords = utm.toLatLon(...monument.geometry.coordinates, 30, 'U');
      this.place = new Place(
        monument.properties.codvia,
        monument.properties.nombre,
        parseInt(monument.properties.numpol, 10),
        coords.latitude,
        coords.longitude,
        parseInt(monument.properties.telefono, 10),
        parseInt(monument.properties.idnotes, 10),
      );
      // utm.toLatLon(coordinates[0], coordinanes[1], 30, 'U');
      this._place.push(this.place);
    });
    return this._place;
  }

  getPlacesCSV(): Array<Place> {
    let contentCSV = '';
    let csvData = [];
    this._http.get('../../assets/vias.csv', { responseType: 'text' }).subscribe(
      result => {
        contentCSV = result;
        csvData = contentCSV.split('\n');
        csvData.forEach(el => {
          const delimiter = el.split(';');
          const via = new Vias(
            delimiter[0],
            delimiter[1],
            delimiter[2],
            delimiter[3],
            delimiter[4]
          );
          this.viasData.push(via);
        });

        this._place.forEach(place => {
          place.setVia(this.matchIds(place.getIdVia()));
        });
      },
      error => {
        console.log(error);
      }
    );
    console.log(this._place);
    return this._place;
  }

  matchIds(valueId: string): Vias {
    let value: Vias;
    this.viasData.forEach(via => {
      if (via.getCodVia() === valueId) {
        value = via;
      }
    });
    return value;
  }
}
