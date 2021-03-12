import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { Album } from './album.model';
import { DiscographyService } from './discography.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  public albumSubject$ = new BehaviorSubject<Album[] | null>(null);
  public currentAlbum$ = new BehaviorSubject<string | undefined>('');

  isLoading = false;
  statusError?: string;

  constructor(private discographyservice: DiscographyService) {}

  //l'utilizzo del pipe è solo per esercitazione
  loadAlbumList(url: string) {
    this.isLoading = true;
    this.discographyservice
      .getAlbumList(url)
      .pipe(
        take(1),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (response) => {
          this.albumSubject$.next(response);
          this.statusError = undefined;
        },
        (error) => {
          console.log('Errore: ', error);
          this.statusError = error.status;
          this.albumSubject$.next([]);
        },
        () => {
          console.log('Lista caricata');
        }
      );
  }

  getCurrentAlbumName(value: string | undefined) {
    this.currentAlbum$.next(value);
  }
}
