import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { SingleAlbumComponent } from './single-album/single-album.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { ErrorComponent } from './error/error.component';
import { DiscographyContainerComponent } from './discography-container/discography-container.component';

@NgModule({
  declarations: [AppComponent, AlbumListComponent, SingleAlbumComponent, LoaderComponent, ErrorComponent, DiscographyContainerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
