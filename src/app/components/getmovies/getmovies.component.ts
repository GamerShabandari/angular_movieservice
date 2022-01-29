import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getmovies',
  templateUrl: './getmovies.component.html',
  styleUrls: ['./getmovies.component.scss']
})
export class GetmoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movieSearch(titleToSearch:string){

    console.log(titleToSearch);
    

    // fetch title

  }

}
