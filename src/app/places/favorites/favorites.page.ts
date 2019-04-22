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

// Multiple actions which an user can do with favorites monuments
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

  // Function which deletes a favorite monument
  deleteFavorite(fav: Place) {
    const index = this.favs.indexOf(fav);
    if (index > -1) {
      this.favs.splice(index, 1);
    }
  }

}
