import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.scss'],
})
export class SingleAlbumComponent implements OnInit {
  currentAlbum: Album;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.AlbumSubject.subscribe(
      (response) => (this.currentAlbum = response)
    );
  }
}
