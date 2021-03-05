import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { DiscographyService } from '../discography.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  selectedAlbum?: Album;

  constructor(
    private discographyservice: DiscographyService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.discographyservice
      .getAlbumList()
      .subscribe((response) => (this.albums = response));
  }

  selectAlbum(album: Album) {
    this.albumService.setCurrentAlbum(album);
    this.selectedAlbum = album;
  }
}
