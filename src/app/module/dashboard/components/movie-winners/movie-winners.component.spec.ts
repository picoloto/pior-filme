import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MovieWinnersComponent } from './movie-winners.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from '../../../../shared/services/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Movie_Winner_By_Year_Mock } from '../../../../shared/mocks/movie-winner-by-year.mock';

describe('MovieWinnersComponent', () => {
  let component: MovieWinnersComponent;
  let fixture: ComponentFixture<MovieWinnersComponent>;
  let movieListService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MovieWinnersComponent,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieWinnersComponent);
    component = fixture.componentInstance;

    movieListService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getMovieWinnerByYear() should call getMovieWinnerByYear() and return data', waitForAsync(() => {
    spyOn(movieListService, 'getMovieWinnerByYear').and.returnValue(
      of(Movie_Winner_By_Year_Mock)
    );
    component.getMovieWinnerByYear();
    fixture.detectChanges();

    expect(component.movieWinnerListByYear).toEqual(Movie_Winner_By_Year_Mock);
  }));
});
