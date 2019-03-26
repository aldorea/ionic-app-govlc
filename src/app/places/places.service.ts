import { Injectable } from "@angular/core";
import { Place } from "../models/places.model";
import * as data from "../../assets/monumentos-turisticos.json";
import * as Papa from "papaparse";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Vias } from "../models/vias.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private place: Place;
  private via: Vias;
  private _place: Array<Place> = [];
  private viasData: Array<Vias> = [];

  constructor(private _http: HttpClient) {}

    getPlacesJSON(): Array<Place> {
      data.features.forEach(monument => {
          this.place = new Place(
            parseInt(monument.properties.codvia, 10),
            monument.properties.nombre,
            parseInt(monument.properties.numpol, 10),
            parseInt(monument.properties.telefono, 10),
            parseInt(monument.properties.idnotes, 10));

          this._place.push(this.place);
      });
      return this._place;
    }

    // getPlacesCSV(): Array<Vias> {
    // this._http
    //   .get('../../assets/vias.csv', { responseType: 'text' as 'json' })
    //   .subscribe(
    //     result => {
    //       // console.log(result);
    //       Papa.parse(result, {
    //         delimiter: ';',
    //         header: true,
    //         encoding: 'UTF-8',
    //         step: (results, parser) => {
    //           //console.log(results);
    //           this.via = new Vias (
    //             results.data[0].codtipovia,
    //             parseInt( results.data[0].codvia, 10),
    //             parseInt(results.data[0].codviacatastro, 10),
    //             results.data[0].nomoficial,
    //             results.data[0].traducnooficial);
    //           this.viasData.push(this.via);
    //         }
    //       });

    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    //   console.log(this.viasData);
      
    //   return this.viasData;
    // }
      
  getPlacesCSV() {
    let contentCSV = '';
    let csvData = [];
      this._http.get('../../assets/vias.csv', { responseType: 'text' as 'json' })
       .subscribe(
         result => {
          console.log(result);
          contentCSV = result;
          csvData = contentCSV.split('\n');
          csvData.forEach(via => {
            const delimiter = via.split(';');
            
          })
                    

         },
         error => {
           console.log(error);
         }
       );
  }


    matchIds(valueId: number): Vias {
    let value: Vias;
    this.viasData.forEach(via => {
      if (via.getCodVia() === valueId) {
        value = via;
      }
    });
    return value;
    }

   matchInfo() {
     // this.getPlacesCSV();
     this.getPlacesJSON().forEach(place => {
       place.setVia(this.matchIds(place.getIdVia()))
     })
   }

}
