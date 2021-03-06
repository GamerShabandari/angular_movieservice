import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetmoviesComponent } from './components/getmovies/getmovies.component';
import { DisplayfavoritesComponent } from './components/displayfavorites/displayfavorites.component';

@NgModule({
  declarations: [
    AppComponent,
    GetmoviesComponent,
    DisplayfavoritesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
