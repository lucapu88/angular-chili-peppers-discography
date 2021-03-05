import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class DiscographyService {
  url = 'https://prova1api.herokuapp.com/RedHotCHiliPeppersDiscography';
  constructor(private httpClient: HttpClient) {}

  getAlbumList(): Observable<Album[]> {
    return this.httpClient
      .get<{ success: boolean; response: Album[] }>(this.url)
      .pipe(map((httpRes) => httpRes.response));
  }
}
