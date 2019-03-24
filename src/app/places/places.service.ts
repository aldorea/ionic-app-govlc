import { Injectable } from '@angular/core';
import { Place } from './places.model';
import * as data from '../../assets/monumentos-turisticos.json';
import * as Papa from 'papaparse';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

private place: Place;
private _place: Array<Place> = [];
private csvFile: Array<any> = [];


  constructor(private _http: HttpClient) { }



  getPlaces(): Array<Place> {
    data.features.forEach(monument => {
        this.place = new Place();
        this.place.idVia = parseInt(monument.properties.codvia, 10);
        this.place.name = monument.properties.nombre;
        this.place.route = parseInt(monument.properties.ruta, 10);
        this.place.numPortal = parseInt(monument.properties.numpol, 10);
        this.place.phone = parseInt(monument.properties.telefono, 10);
        this.place.idNotes = parseInt(monument.properties.idnotes, 10);
         this._place.push(this.place);
    });
    return this._place;
  }

    readFile() {
     this._http.get('../../assets/vias.csv', { responseType: 'text' as 'json'}).subscribe(
      result => {
       // console.log(result);
        Papa.parse(result, {
                delimiter: ';',
                header: true,
                encoding: 'UTF-8',
                complete: (results, file) => {
                 // console.log('Parsing complete:', results, file);
                 return results;
                }
              });
      },
      error => {
        console.log( <any>error);
      }
    );

    
   }

  //  getIdVias() {
  //    Papa.parse('src\assets\vias.cv', {
  //      delimiter: ',',
  //      header: true,
  //      encoding: 'UTF-8',
  //      complete: (results, file) => {
  //        console.log('Parsing complete:', results, file);
  //      }
  //    })
  //  }



}
