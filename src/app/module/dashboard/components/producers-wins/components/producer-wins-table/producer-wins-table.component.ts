import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProducerInterval } from '../../../../../../model/max-min-win-producers-dto.model';

@Component({
  selector: 'app-producer-wins-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './producer-wins-table.component.html',
  styleUrl: './producer-wins-table.component.scss',
})
export class ProducerWinsTableComponent {
  displayedColumns: string[] = [
    'producer',
    'interval',
    'previousWin',
    'followingWin',
  ];

  @Input() dataSource: ProducerInterval[] = [];
}
