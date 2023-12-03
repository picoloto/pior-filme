import { Component } from '@angular/core';
import { MovieService } from '../../../../shared/services/movie.service';

import { MatTableModule } from '@angular/material/table';
import { StudioWinnerCount } from '../../../../model/top-studio-winner-list-dto.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-top-studios-winners',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './top-studios-winners.component.html',
  styleUrl: './top-studios-winners.component.scss',
})
export class TopStudiosWinnersComponent {
  displayedColumns: string[] = ['name', 'winCount'];

  studioWinnerCount: StudioWinnerCount[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getTopStudiosWinners();
  }

  getTopStudiosWinners() {
    this.movieService
      .getTopStudiosWinners()
      .pipe(map((data) => data.studios.slice(0, 3)))
      .subscribe((data: StudioWinnerCount[]) => {
        console.log(data, 'data');
        this.studioWinnerCount = data;
      });
  }
}
