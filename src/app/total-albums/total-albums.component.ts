import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-total-albums',
  templateUrl: './total-albums.component.html',
  styleUrls: ['./total-albums.component.scss'],
})
export class TotalAlbumsComponent implements OnInit {
  albumsLength$ = this.albumService.albumSubject$.pipe(
    map((albums) => albums?.length)
  );

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {}
}
