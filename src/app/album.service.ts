import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  public albumSubject$: BehaviorSubject<Album>;

  constructor() {
    this.albumSubject$ = new BehaviorSubject(null);
  }

  get AlbumSubject() {
    return this.albumSubject$;
  }

  setCurrentAlbum(album: Album) {
    this.albumSubject$.next(album);
    // console.log('albumsubj', this.albumSubject$);
    // console.log('aaaa', album);
  }
}
