import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MovieService } from '../../../../shared/services/movie.service';
import { YearWinnerCount } from '../../../../model/multiple-winner-list-dto.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-multiple-winners',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './multiple-winners.component.html',
  styleUrl: './multiple-winners.component.scss',
})
export class MultipleWinnersComponent implements OnInit {
  displayedColumns: string[] = ['year', 'winCount'];

  yearWinnerCount: YearWinnerCount[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMultipleWinnersList();
  }

  getMultipleWinnersList() {
    this.movieService
      .getMultipleWinners()
      .pipe(map((data) => data.years))
      .subscribe((data: YearWinnerCount[]) => {
        console.log(data, 'data');
        this.yearWinnerCount = data;
      });
  }
}
