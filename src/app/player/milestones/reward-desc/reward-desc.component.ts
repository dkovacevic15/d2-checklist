import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Const } from '@app/service/model';

@Component({
  selector: 'd2c-reward-desc',
  templateUrl: './reward-desc.component.html',
  styleUrls: ['./reward-desc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RewardDescComponent implements OnInit {
  public Const = Const;

  @Input() pl: number;
  @Input() rewards: string;
  @Input() sort: string;


  @Output() sortClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
