import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Movie } from '../../../../model/movie.model';
import { MovieService } from '../../../../shared/services/movie.service';
import { MatTableModule } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { YearFilterComponent } from '../../../../shared/components/year-filter/year-filter.component';

@Component({
  selector: 'app-movie-winners',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    YearFilterComponent,
  ],
  templateUrl: './movie-winners.component.html',
  styleUrl: './movie-winners.component.scss',
})
export class MovieWinnersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'year', 'title'];

  movieWinnerListByYear: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovieWinnerByYear();
  }

  getMovieWinnerByYear(filter?: number | undefined) {
    this.movieService
      .getMovieWinnerByYear(filter ?? 2015)
      .subscribe((data: Movie[]) => {
        console.log(data, 'data');
        this.movieWinnerListByYear = data;
      });
  }
}
