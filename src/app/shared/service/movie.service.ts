import { FilterWinner } from '../enum/filter-winner.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/envrironment';
import { Observable } from 'rxjs';
import { MovieListDto } from '../../model/movie-list-dto.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getListMovies(
    page: Number,
    filterWinner: FilterWinner,
    year?: Number
  ): Observable<any> {
    const pagePath: String = `?page=${page}`;
    const sizePath: String = `&size=10`;
    const yearPath: String = year ? `&year=${year}` : '';
    let winnerPath: String = '';

    switch (filterWinner) {
      case FilterWinner.INDICATED:
        winnerPath = `&winner=false`;
        break;
      case FilterWinner.WINNER:
        winnerPath = `&winner=true`;
        break;
      default:
        break;
    }

    return this.httpClient.get<MovieListDto>(
      `${environment.apiUrl}${pagePath}${sizePath}${winnerPath}${yearPath}`
    );
  }
}
