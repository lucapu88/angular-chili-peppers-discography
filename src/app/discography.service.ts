import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class DiscographyService {
  urlTrue = 'https://prova1api.herokuapp.com/RedHotCHiliPeppersDiscography';
  urlFalse = 'https://prova1api.herokuapp.com/RedHotCHiliPeppersDisco'; //per creare l'errore
  constructor(private httpClient: HttpClient) {}

  getAlbumList(): Observable<Album[]> {
    return interval(2000).pipe(
      switchMap(() =>
        this.httpClient
          .get<{ success: boolean; response: Album[] }>(
            //Math.random() > 0.5 ? this.urlTrue : this.urlFalse
            this.urlTrue
            //this.urlFalse
          )
          .pipe(map((httpRes) => httpRes.response))
      )
    );
  }
}
