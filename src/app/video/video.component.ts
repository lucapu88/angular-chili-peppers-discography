import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlbumService } from '../album.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  subscription: Subscription;
  currentAlbum: string | undefined;
  text: string = 'Torna agli album';
  url: any;
  video: any = { id: 'yOYmdyaSOCg' };
  baseUrl: string = 'https://www.youtube.com/embed/';

  constructor(
    private sanitizer: DomSanitizer,
    private albumService: AlbumService,
    private location: Location
  ) {
    this.subscription = this.albumService.currentAlbum$
      .pipe(tap(console.log))
      .subscribe((val) => (this.currentAlbum = val));
  }

  ngOnInit(): void {
    //console.log('current-album: ', this.currentAlbum);
    switch (this.currentAlbum) {
      case 'the red hot chili peppers':
        this.video.id = 'yOYmdyaSOCg';
        break;
      case 'Freaky Styley':
        this.video.id = '3Z4JUqA_bKE';
        break;
      case 'The Uplift Mofo Party Plan':
        this.video.id = 'a8DPkw5Nc64';
        break;
      case "Mother's Milk":
        this.video.id = 'HZySqMlEuSQ';
        break;
      case 'Blood Sugar Sex Magik':
        this.video.id = 'Mr_uHJPUlO8';
        break;
      case 'One Hot Minute':
        this.video.id = 'vV8IAOojoAA';
        break;
      case 'Californication':
        this.video.id = 'mzJj5-lubeM';
        break;
      case 'By the Way':
        this.video.id = 'JnfyjwChuNU';
        break;
      case 'Stadium Arcadium':
        this.video.id = 'oDNcL1VP3rY';
        break;
      case "I'm with You":
        this.video.id = 'qOgFHMEJMeY';
        break;
      case 'The Getaway':
        this.video.id = 'Q0oIoR9mLwc';
        break;
      default:
        this.video.id = 'TYYW_WwYHuM';
    }
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.baseUrl + this.video.id
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
