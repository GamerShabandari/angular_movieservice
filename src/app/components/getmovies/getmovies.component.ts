import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-getmovies',
  templateUrl: './getmovies.component.html',
  styleUrls: ['./getmovies.component.scss']
})
export class GetmoviesComponent implements OnInit {

  matchedMovies: Movie[] = []

  filmcontainer:string = "filmcontainer"

  constructor() { }

  ngOnInit(): void {
  }

  movieSearch(titleToSearch:string){

    console.log(titleToSearch);
    
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5ed1c386&s=" + titleToSearch).then((response)=>response.json()
    ).then((data)=>{

      console.log(data.Search[0]);

      //this.matchedMovies = data.Search;

      let searchResult = data.Search;

      for (let i = 0; i < searchResult.length; i++) {
        const thisFilm = searchResult[i];

        this.matchedMovies.push(new Movie(thisFilm.Title,thisFilm.Poster,thisFilm.Year))
        
      }

    })

  }

  renderMovieDetails(movieTitle:string){

    
  }

}
