import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleAlbumComponent {
  @Input() album?: Album;

  constructor(private albumService: AlbumService) {}

  ngOnChanges(): void {
    this.albumService.getCurrentAlbumName(this.album?.album);
  }
}
