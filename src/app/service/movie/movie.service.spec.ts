import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FilterWinner } from '../../shared/enums/filter-winner.enum';
import { Movie_List_Dto_Mock } from '../../shared/mocks/movie-list-dto.mock';
import { environment } from '../../shared/environment/envrironment';
import { Multiple_Winners_Mock } from '../../shared/mocks/multiple-winners.mock';
import { Top_Studios_winners_Mock } from '../../shared/mocks/top-studios-winners.mock';
import { Min_Max_Win_Producers_Mock } from '../../shared/mocks/min-max-win-producers.mock';
import { Movie_Winner_By_Year_Mock } from '../../shared/mocks/movie-winner-by-year.mock';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getMoviesList() should return data', () => {
    const pagePath: String = `?page=${0}`;
    const sizePath: String = `&size=10`;
    const yearPath: String = `&year=${1999}`;
    const winnerPath: String = '';

    service.getMoviesList(0, FilterWinner.ALL, 1999).subscribe((res) => {
      expect(res).toEqual(Movie_List_Dto_Mock);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}${pagePath}${sizePath}${winnerPath}${yearPath}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(Movie_List_Dto_Mock);
  });

  it('getMultipleWinners() should return data', () => {
    service.getMultipleWinners().subscribe((res) => {
      expect(res).toEqual(Multiple_Winners_Mock);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}${environment.projectionPath}years-with-multiple-winners`
    );
    expect(req.request.method).toBe('GET');
    req.flush(Multiple_Winners_Mock);
  });

  it('getTopStudiosWinners() should return data', () => {
    service.getTopStudiosWinners().subscribe((res) => {
      expect(res).toEqual(Top_Studios_winners_Mock);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}${environment.projectionPath}studios-with-win-count`
    );
    expect(req.request.method).toBe('GET');
    req.flush(Top_Studios_winners_Mock);
  });

  it('getMinMaxWinProducers() should return data', () => {
    service.getMinMaxWinProducers().subscribe((res) => {
      expect(res).toEqual(Min_Max_Win_Producers_Mock);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}${environment.projectionPath}max-min-win-interval-for-producers`
    );
    expect(req.request.method).toBe('GET');
    req.flush(Min_Max_Win_Producers_Mock);
  });

  it('getMovieWinnerByYear() should return data', () => {
    service.getMovieWinnerByYear(2000).subscribe((res) => {
      expect(res).toEqual(Movie_Winner_By_Year_Mock);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}?winner=true&year=2000`
    );
    expect(req.request.method).toBe('GET');
    req.flush(Movie_Winner_By_Year_Mock);
  });

  it('getWinnerPath() should return string with path', () => {
    expect(service.getWinnerPath(FilterWinner.ALL)).toBe('');
    expect(service.getWinnerPath(FilterWinner.INDICATED)).toBe('&winner=false');
    expect(service.getWinnerPath(FilterWinner.WINNER)).toBe('&winner=true');
  });
});
