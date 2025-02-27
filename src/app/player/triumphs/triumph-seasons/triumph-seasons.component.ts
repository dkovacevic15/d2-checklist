import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StorageService } from '@app/service/storage.service';
import { ChildComponent } from '@app/shared/child.component';
import { PlayerStateService } from '../../player-state.service';

@Component({
  selector: 'd2c-triumph-seasons',
  templateUrl: './triumph-seasons.component.html',
  styleUrls: ['./triumph-seasons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriumphSeasonsComponent extends ChildComponent implements OnInit {
  public seasonIndex = 0;

  constructor(storageService: StorageService,
    public state: PlayerStateService) {
    super(storageService);
  }

  ngOnInit() {
  }

}
