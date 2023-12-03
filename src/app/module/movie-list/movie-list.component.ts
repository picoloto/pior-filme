import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FilterWinner } from '../../shared/enums/filter-winner.enum';
import { MovieService } from '../../shared/services/movie.service';
import { MovieListDto } from '../../model/movie-list-dto.model';
import { Movie } from '../../model/movie.model';
import { Paginator } from '../../model/paginator.model';
import { YearFilterComponent } from '../../shared/components/year-filter/year-filter.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    YearFilterComponent,
  ],
  providers: [MovieService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];

  winnerFilterOptions = [
    { value: FilterWinner.ALL, viewValue: FilterWinner.ALL },
    { value: FilterWinner.WINNER, viewValue: FilterWinner.WINNER },
    { value: FilterWinner.INDICATED, viewValue: FilterWinner.INDICATED },
  ];
  initialWinnerFilter = this.winnerFilterOptions[0].value;

  yearFilter?: Number;
  filterWinner: FilterWinner = FilterWinner.ALL;

  movieListDto?: MovieListDto;
  movieList: Movie[] = [];

  paginator: Paginator = new Paginator();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.applyYearFilter();
  }

  getMovieList() {
    this.movieService
      .getListMovies(
        this.paginator.pageIndex,
        this.filterWinner,
        this.yearFilter
      )
      .subscribe((data: MovieListDto) => {
        console.log(data, 'data');
        this.movieListDto = data;
        this.movieList = [...this.movieListDto.content];
        this.setPaginatorParameters();
      });
  }

  setPaginatorParameters(): void {
    this.paginator.length = this.movieListDto?.totalElements ?? 0;
    this.paginator.pageSize = this.movieListDto?.size ?? 0;
  }

  handlePageEvent(e: PageEvent) {
    this.paginator.pageIndex = e.pageIndex;
    this.getMovieList();
  }

  applyYearFilter(filter?: number | undefined): void {
    this.yearFilter = filter?.toString().length === 4 ? filter : undefined;
    this.getMovieList();
  }

  winnerFilterChange(event: MatSelectChange) {
    const filter: FilterWinner = event.value as FilterWinner;
    this.filterWinner = filter;
    this.paginator.pageIndex = 0;

    this.getMovieList();
  }
}
