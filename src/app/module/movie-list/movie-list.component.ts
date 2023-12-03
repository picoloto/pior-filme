import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FilterWinner } from '../../shared/enum/filter-winner.enum';
import { MovieListService } from './movie-list.service';
import { MovieListDto } from '../../model/movie-list-dto.model';
import { Movie } from '../../model/movie.model';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

interface Winner {
  value: FilterWinner;
  viewValue: string;
}

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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('yearFilterInput') yearFilterInput!: ElementRef;

  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];

  foods: Winner[] = [
    { value: FilterWinner.ALL, viewValue: FilterWinner.ALL },
    { value: FilterWinner.WINNER, viewValue: FilterWinner.WINNER },
    { value: FilterWinner.INDICATED, viewValue: FilterWinner.INDICATED },
  ];
  selectedFood = this.foods[0].value;

  movieListDto?: MovieListDto;
  movieList: Movie[] = [];

  constructor(
    private movieListService: MovieListService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getMovieList({});
  }

  ngAfterViewInit() {
    fromEvent(this.yearFilterInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.getMovieList({ year: res.length === 4 ? res : undefined });
      });
  }

  winnerFilterChange(event: MatSelectChange) {
    const filter: FilterWinner = event.value as FilterWinner;

    this.getMovieList({ winner: filter });
  }

  // TODO:
  // Falta fazer os filtros funcionarem juntos (criar scope)
  // Falta arrumar a paginacao
  // Falta os testes unitarios
  // Falta limpar o código

  getMovieList(optionals: { year?: Number; winner?: FilterWinner }) {
    this.movieListService
      .getListMovies(0, optionals.winner ?? FilterWinner.ALL, optionals.year)
      .subscribe((data: MovieListDto) => {
        console.log(data, 'data');
        this.movieListDto = data;
        this.movieList = [...this.movieListDto.content];
      });
  }
}
