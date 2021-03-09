import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleAlbumComponent {
  @Input() album?: Album;

  constructor() {}
}
