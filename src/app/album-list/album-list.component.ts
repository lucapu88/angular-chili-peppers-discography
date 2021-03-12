import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListComponent implements OnInit {
  @Input() albumList?: Album[] | null;
  @Input() selectedAlbum?: Album;
  constructor() {}

  ngOnInit(): void {}
}
