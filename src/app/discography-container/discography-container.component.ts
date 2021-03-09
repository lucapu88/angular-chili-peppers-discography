import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { DiscographyService } from '../discography.service';

@Component({
  selector: 'app-discography-container',
  templateUrl: './discography-container.component.html',
  styleUrls: ['./discography-container.component.scss'],
})
export class DiscographyContainerComponent implements OnInit {
  albums: Album[] = [];
  selectedAlbum?: Album;
  isLoading = false;
  statusError?: string;

  constructor(
    private discographyservice: DiscographyService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum() {
    this.isLoading = true;
    this.discographyservice
      .getAlbumList()
      .pipe(
        take(1),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (response) => {
          this.albums = response;
          this.statusError = undefined;
        },
        (error) => {
          console.log('Errore: ', error);
          this.statusError = error.status;
          this.albums = [];
        },
        () => {
          console.log('Lista caricata');
        }
      );
  }

  selectAlbum(album: Album) {
    this.albumService.setCurrentAlbum(album);
    this.selectedAlbum = album;
  }

  ngOnDestroy(): void {}
}
