import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import { Place } from 'src/app/models/places.model';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Instagram } from '@ionic-native/instagram/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favs: Array<Place> = [];
  image: string;

  constructor(private placesService: PlacesService,
    public actionSheetController: ActionSheetController,
    public instagram: Instagram,
    public camera: Camera,
    public localNotification: LocalNotifications,
    public alertController: AlertController ) {
  }

  ngOnInit() {
    this.favs = this.placesService.getFavorites();
    console.log(this.favs);
  }

  onOptionsFav(fav: Place) {

     this.actionSheetController.create({
        header: 'Options',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
            this.deleteFavorite(fav);
          }
        }, {
          text: 'Plan a visit',
          icon: 'alarm',
          handler: () => {
            console.log('Favorite clicked');
            // this.shareImage();
            this.localNotification.schedule({
              id: 1,
              title: 'Attention',
              text: 'You have a meeting',
              data: { data: 'You planned a vist' },
              trigger: {at: new Date(new Date().getTime() + 5 * 1000)}
            });
          }
        }, {
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

  deleteFavorite(fav: Place) {
    const index = this.favs.indexOf(fav);
    if (index > -1) {
      this.favs.splice(index, 1);
    }
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

    shareImage() {
      this.instagram.share(this.image, 'This was copied to my clipboard');
    }

    makeNotification () {
      
    }
}
