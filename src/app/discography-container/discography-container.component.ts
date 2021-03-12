import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-discography-container',
  templateUrl: './discography-container.component.html',
  styleUrls: ['./discography-container.component.scss'],
})
export class DiscographyContainerComponent implements OnInit {
  albums$ = this.albumService.albumSubject$;
  selectedAlbum?: Album;
  text: string = 'RELOAD';

  constructor(public albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum() {
    this.albumService.loadAlbumList();
  }

  ngOnDestroy(): void {}
}
