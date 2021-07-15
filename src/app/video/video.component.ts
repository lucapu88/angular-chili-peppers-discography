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
  video: any = { id: 'TYYW_WwYHuM' };
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
    this.takeVideo(this.currentAlbum);
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

  takeVideo(currentAlbum: string | undefined): void {
    const videos = {
      'the red hot chili peppers': 'yOYmdyaSOCg',
      'Freaky Styley': '3Z4JUqA_bKE',
      'The Uplift Mofo Party Plan': 'a8DPkw5Nc64',
      "Mother's Milk": 'HZySqMlEuSQ',
      'Blood Sugar Sex Magik': 'Mr_uHJPUlO8',
      'One Hot Minute': 'vV8IAOojoAA',
      Californication: 'mzJj5-lubeM',
      'By the Way': 'JnfyjwChuNU',
      'Stadium Arcadium': 'oDNcL1VP3rY',
      "I'm with You": 'qOgFHMEJMeY',
      'The Getaway': 'Q0oIoR9mLwc',
    };

    this.video.id = videos[currentAlbum] ?? this.video.id;
    return this.video.id;
  }
}
