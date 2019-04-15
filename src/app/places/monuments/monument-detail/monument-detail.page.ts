import { Component, OnInit, ErrorHandler } from '@angular/core';
import { PlacesService } from '../../shared/places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/models/places.model';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-monument-detail',
  templateUrl: './monument-detail.page.html',
  styleUrls: ['./monument-detail.page.scss'],
})
export class MonumentDetailPage implements OnInit {
// favorites: Array<Place> = [];

monument: Place;
phone: string;
image: string;


  constructor(private placeService: PlacesService,
              private activatedRoute: ActivatedRoute,
              private callNumber: CallNumber,
              public camera: Camera,
              public actionSheetController: ActionSheetController,
              public alertController: AlertController
            ) {}


  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.monument = this.placeService.getMonumentById(params.id);
      this.phone = this.monument.getTelefono().toString();
    });

  }

  onOptionsDetail(monument) {

    this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
          this.makeFav(monument);
        }
      }, {
        text: 'Call',
        icon: 'call',
        handler: () => {
          console.log('Call clicked');
          this.makeCall(monument);
        }
      }, {
        text: 'Photo',
        icon: 'camera',
        handler: () => {
          this.getPicture();
        }
      }
      , {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });

  }

  makeFav(monument: Place) {
    if (!monument.getFav()) {
      monument.setFav(true);
      this.placeService.addFavorites(this.monument);
    } else {
      this.presentAlertFav();
    }
  }

  makeCall(monument: Place) {
    if (monument.getTelefono() !== 0) {
      this.callNumber.callNumber(this.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    } else {
      console.log('Es nulo ' + monument.getTelefono());
      this.presentAlertPhone();
    }

  }

  makeVisit() {
    this.monument.setVisitado(true);
    console.log(this.monument);
  }

  async presentAlertFav() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      message: 'This place is in your favorites places',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertPhone() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      message: 'The phone number is not available',
      buttons: ['OK']
    });
    await alert.present();
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.image = 'data:image/jpeg;base64,' + imageData;
     }, (error) => {
      // Handle error
      console.error( error );
     });

  }
  

}
