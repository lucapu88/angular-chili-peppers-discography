import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  public albumSubject$ = new BehaviorSubject<Album | null>(null);

  constructor() {}

  get AlbumSubject() {
    return this.albumSubject$;
  }

  setCurrentAlbum(album: Album) {
    this.albumSubject$.next(album);
  }
}
