import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildComponent } from '@app/shared/child.component';
import { ClanStateService } from '../clan-state.service';
import { StorageService } from '@app/service/storage.service';

@Component({
  selector: 'd2c-clan-members',
  templateUrl: './clan-members.component.html',
  styleUrls: ['./clan-members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanMembersComponent extends ChildComponent implements OnInit {

  constructor(
    public state: ClanStateService,
    storageService: StorageService) {
    super(storageService);
  }

  ngOnInit() {
  }

}
