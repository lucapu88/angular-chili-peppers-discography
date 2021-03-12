import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { DiscographyService } from '../discography.service';

@Component({
  selector: 'app-discography-container',
  templateUrl: './discography-container.component.html',
  styleUrls: ['./discography-container.component.scss'],
})
export class DiscographyContainerComponent implements OnInit {
  albums$ = this.albumService.albumSubject$;
  selectedAlbum?: Album;
  textTrue: string = 'Reload with ERROR';
  textFalse: string = 'Reload CORRECT';
  urlTrue = 'https://prova1api.herokuapp.com/RedHotCHiliPeppersDiscography';
  urlFalse = 'https://prova1api.herokuapp.com/RedHotCHiliPeppersDisco'; //per creare l'errore

  constructor(
    public albumService: AlbumService,
    public discographyservice: DiscographyService
  ) {}

  ngOnInit(): void {
    this.loadAlbum(this.urlTrue);
  }

  loadAlbum(url: string) {
    this.albumService.loadAlbumList(url);
  }

  ngOnDestroy(): void {}
}
