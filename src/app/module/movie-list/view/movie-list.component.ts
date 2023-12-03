import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FilterWinner } from '../../../shared/enum/filter-winner.enum';
import { MovieListService } from '../service/movie-list.service';
import { MovieListDto } from '../../../model/movie-list-dto.model';
import { Movie } from '../../../model/movie.model';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { Paginator } from '../../../model/paginator.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [MovieListService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit, AfterViewInit {
  // HTML Elements
  @ViewChild('yearFilterInput') yearFilterInput!: ElementRef;

  // Table
  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];

  // Select options
  winnerFilterOptions = [
    { value: FilterWinner.ALL, viewValue: FilterWinner.ALL },
    { value: FilterWinner.WINNER, viewValue: FilterWinner.WINNER },
    { value: FilterWinner.INDICATED, viewValue: FilterWinner.INDICATED },
  ];
  initialWinnerFilter = this.winnerFilterOptions[0].value;

  // Filter
  filterYear?: Number;
  filterWinner: FilterWinner = FilterWinner.ALL;

  // API Data
  movieListDto?: MovieListDto;
  movieList: Movie[] = [];

  // Paginator
  paginator: Paginator = new Paginator();

  constructor(private movieListService: MovieListService) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  ngAfterViewInit() {
    this.applyYearFilter();
  }

  winnerFilterChange(event: MatSelectChange) {
    const filter: FilterWinner = event.value as FilterWinner;
    this.filterWinner = filter;
    this.paginator.pageIndex = 0;

    this.getMovieList();
  }

  getMovieList() {
    this.movieListService
      .getListMovies(
        this.paginator.pageIndex,
        this.filterWinner,
        this.filterYear
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

  applyYearFilter(): void {
    fromEvent(this.yearFilterInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.filterYear = res.length === 4 ? res : undefined;
        this.getMovieList();
      });
  }
}
