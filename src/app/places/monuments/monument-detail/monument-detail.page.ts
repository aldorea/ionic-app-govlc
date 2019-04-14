import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../shared/places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/models/places.model';
// import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-monument-detail',
  templateUrl: './monument-detail.page.html',
  styleUrls: ['./monument-detail.page.scss'],
})
export class MonumentDetailPage implements OnInit {

monument: Place;
visitado: boolean;
phone: string;

  constructor(private placeService: PlacesService,
              private activatedRoute: ActivatedRoute,
            //  private callNumber: CallNumber 
            ) {

    this.visitado = false;

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.monument = this.placeService.getMonumentById(params.id);
      this.phone = this.monument.getTelefono().toString();
      console.log(this.monument);
    });

  }

  // makeCall() {
  //   if (this.phone === '0') {
  //     console.log('El telf es 0')
  //   } else {
  //     this.callNumber.callNumber(this.phone, true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));
  //   }
  // }


  // mirar como funciona con params
  // setVisitado(visit: boolean) {
  // }

}
