import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class DiscographyService {
  constructor(private httpClient: HttpClient) {}

  //l'utilizzo dell'interval e del pipe è a scopo esercitativo
  getAlbumList(url: string): Observable<Album[]> {
    return interval(2000).pipe(
      switchMap(() =>
        this.httpClient
          .get<{ success: boolean; response: Album[] }>(url)
          .pipe(map((httpRes) => httpRes.response))
      )
    );
  }
}
