import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './routes/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModule} from '../material.module';
import {ComicsComponent} from './routes/comics/comics.component';
import { DetailComponent } from './routes/detail/detail.component';
import { CharactersComponent } from './routes/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    DetailComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
