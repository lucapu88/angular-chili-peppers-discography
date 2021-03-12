import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { SingleAlbumComponent } from './single-album/single-album.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { ErrorComponent } from './error/error.component';
import { DiscographyContainerComponent } from './discography-container/discography-container.component';
import { TotalAlbumsComponent } from './total-albums/total-albums.component';
import { NumberToWordsPipe } from './number-to-words.pipe';
import { VideoComponent } from './video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    SingleAlbumComponent,
    LoaderComponent,
    ErrorComponent,
    DiscographyContainerComponent,
    TotalAlbumsComponent,
    NumberToWordsPipe,
    VideoComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
