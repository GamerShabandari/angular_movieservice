import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { movieDetails } from 'src/app/models/movieDetails';

@Component({
  selector: 'app-displayfavorites',
  templateUrl: './displayfavorites.component.html',
  styleUrls: ['./displayfavorites.component.scss']
})
export class DisplayfavoritesComponent implements OnInit {

  @Input() savedMovie: movieDetails = new movieDetails("", "", "", "", "", "", "", "", "");

  @Input() i:number = 0;

  @Output() deleteMovie = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteFavorite(i:number) {

    this.deleteMovie.emit(i);

  }

}
