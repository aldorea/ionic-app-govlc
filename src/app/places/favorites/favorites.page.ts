import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import { Place } from 'src/app/models/places.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favs: Array<Place> = [];

  constructor(private placesService: PlacesService) {

  }

  ngOnInit() {

    this.favs = this.placesService.getFavorites();
    console.log(this.favs);
  }

  deleteFavorite(fav: Place) {

      const index = this.favs.indexOf(fav);
        this.favs.splice(index, 1);

  }


}
