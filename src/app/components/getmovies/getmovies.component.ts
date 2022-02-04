import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { movieDetails } from 'src/app/models/movieDetails';
import 'animate.css';

@Component({
  selector: 'app-getmovies',
  templateUrl: './getmovies.component.html',
  styleUrls: ['./getmovies.component.scss']
})
export class GetmoviesComponent implements OnInit {

  /////////////////////////////////////////////

  matchedMovies: Movie[] = []

  detailedMovie: movieDetails = new movieDetails("", "", "", "", "", "", "", "", "")

  filmcontainer: string = "filmcontainer"

  detailsContainerStatus: boolean = false

  showFavorites: boolean = false;

  mySavedMovies: movieDetails[] = []


  /////////////////////////////////////////////


  constructor() { }

  /////////////////////////////////////////////

  ngOnInit(): void {

     let myFavoriteMoviesSerialized = localStorage.getItem("myFavorites");

     if (myFavoriteMoviesSerialized) {

      this.mySavedMovies = JSON.parse(localStorage.getItem("myFavorites") || '[]');
       
     } else {

      let myFavoriteMovies: movieDetails[] = []

      localStorage.setItem("myFavorites", JSON.stringify(myFavoriteMovies));

     }

  }

  /////////////////////////////////////////////

  movieSearch(titleToSearch: string) {

    this.detailsContainerStatus = false

    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=5ed1c386&s=" + titleToSearch).then((response) => response.json()
    ).then((data) => {

      this.detailedMovie = new movieDetails("", "", "", "", "", "", "", "", "")

      this.matchedMovies = []

      let searchResult = data.Search;

      for (let i = 0; i < searchResult.length; i++) {
        const thisFilm = searchResult[i];

        this.matchedMovies.push(new Movie(thisFilm.Title, thisFilm.Poster, thisFilm.Year))

      }

    })

  }

  /////////////////////////////////////////////

  renderMovieDetails(movieTitle: string) {

    this.detailsContainerStatus = true

    fetch("https://www.omdbapi.com/?t=" + movieTitle + "&apikey=5ed1c386&s").then((response) => response.json()
    ).then((data) => {

      let selectedMovie = data;

      this.matchedMovies = []

      this.detailedMovie = new movieDetails(selectedMovie.Title, selectedMovie.Poster, selectedMovie.Genre, selectedMovie.Year, selectedMovie.Runtime, selectedMovie.Rated, selectedMovie.Plot, selectedMovie.Director, selectedMovie.Ratings[0].Source + ": " + selectedMovie.Ratings[0].Value)

    })

  }

  saveFavoriteMovies(movieToSaveForLater: movieDetails) {

    if (this.mySavedMovies.length > 0) {

      for (let i = 0; i < this.mySavedMovies.length; i++) {
        const title = this.mySavedMovies[i].title;

        if (title === movieToSaveForLater.title) {

          return

        }

      }

    }

    this.mySavedMovies.push(movieToSaveForLater);
    localStorage.setItem("myFavorites", JSON.stringify(this.mySavedMovies));

  }

  renderFavorites() {

    this.showFavorites = !this.showFavorites;

  }

  updateFavorites(indexToDelete: number) {

    this.mySavedMovies.splice(indexToDelete, 1);
    localStorage.setItem("myFavorites", JSON.stringify(this.mySavedMovies));

  }

}
