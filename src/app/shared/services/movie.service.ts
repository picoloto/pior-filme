import { FilterWinner } from '../enums/filter-winner.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/envrironment';
import { Observable } from 'rxjs';
import { MovieListDto } from '../../model/movie-list-dto.model';
import { MultipleWinnerListDto } from '../../model/multiple-winner-list-dto.model';
import { TopStudioWinnerListDto } from '../../model/top-studio-winner-list-dto.model';
import { MaxMinWinProducersDto } from '../../model/max-min-win-producers-dto.model';
import { Movie } from '../../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMoviesList(
    page: Number,
    filterWinner: FilterWinner,
    year?: Number
  ): Observable<MovieListDto> {
    const pagePath: String = `?page=${page}`;
    const sizePath: String = `&size=10`;
    const yearPath: String = year ? `&year=${year}` : '';
    const winnerPath: String = this.getWinnerPath(filterWinner);

    return this.httpClient.get<MovieListDto>(
      `${environment.apiUrl}${pagePath}${sizePath}${winnerPath}${yearPath}`
    );
  }

  getMultipleWinners(): Observable<MultipleWinnerListDto> {
    return this.httpClient.get<MultipleWinnerListDto>(
      `${environment.apiUrl}${environment.projectionPath}years-with-multiple-winners`
    );
  }

  getTopStudiosWinners(): Observable<TopStudioWinnerListDto> {
    return this.httpClient.get<TopStudioWinnerListDto>(
      `${environment.apiUrl}${environment.projectionPath}studios-with-win-count`
    );
  }

  getMinMaxWinProducers(): Observable<MaxMinWinProducersDto> {
    return this.httpClient.get<MaxMinWinProducersDto>(
      `${environment.apiUrl}${environment.projectionPath}max-min-win-interval-for-producers`
    );
  }

  getMovieWinnerByYear(year: number): Observable<Movie[]> {
    const winnerPath: String = `?winner=true`;
    const yearPath: String = `&year=${year}`;

    return this.httpClient.get<Movie[]>(
      `${environment.apiUrl}${winnerPath}${yearPath}`
    );
  }

  getWinnerPath(filterWinner: FilterWinner): String {
    switch (filterWinner) {
      case FilterWinner.INDICATED:
        return `&winner=false`;
      case FilterWinner.WINNER:
        return `&winner=true`;
      default:
        return '';
    }
  }
}
