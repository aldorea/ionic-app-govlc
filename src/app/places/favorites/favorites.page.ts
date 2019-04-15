import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import { Place } from 'src/app/models/places.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favs: Array<Place> = [];

  constructor(private placesService: PlacesService,
    public actionSheetController: ActionSheetController) {
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
        },{
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
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
}
