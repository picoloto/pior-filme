import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieService } from '../../shared/services/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterWinner } from '../../shared/enums/filter-winner.enum';
import { Paginator } from '../../model/paginator.model';
import { PageEvent } from '@angular/material/paginator';
import { of } from 'rxjs';
import { Movie_List_Dto_Mock } from '../../shared/mocks/movie-list-dto.mock';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MovieListComponent,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;

    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create the MovieListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('getMovies() should call getMoviesList() and return data', waitForAsync(() => {
    spyOn(movieService, 'getMoviesList')
      .withArgs(
        component.paginator.pageIndex,
        component.filterWinner,
        component.yearFilter
      )
      .and.returnValue(of(Movie_List_Dto_Mock));

    component.getMovies();
    fixture.detectChanges();

    expect(component.movieListDto).toEqual(Movie_List_Dto_Mock);
  }));

  it('setPaginatorParameters() should set the paginator parameters', () => {
    component.movieListDto = Movie_List_Dto_Mock;
    component.setPaginatorParameters();

    expect(component.paginator.length).toBe(206);
    expect(component.paginator.pageSize).toBe(10);

    component.movieListDto = undefined;
    component.setPaginatorParameters();

    expect(component.paginator.length).toBe(0);
    expect(component.paginator.pageSize).toBe(0);
  });

  it('handlePageEvent() should set paginator.pageIndex with value of pageEvent', () => {
    const spyGetMovieList = spyOn(component, 'getMovies');
    component.paginator = new Paginator();
    let pageEvent = new PageEvent();
    pageEvent.pageIndex = 1;

    component.handlePageEvent(pageEvent);

    expect(component.paginator.pageIndex).toBe(1);
    expect(spyGetMovieList).toHaveBeenCalled();
  });

  it('winnerFilterChange() should set paginator.pageIndex and filterWinner with value of MatSelectChange', () => {
    const spyGetMovieList = spyOn(component, 'getMovies');
    component.paginator = new Paginator();
    component.paginator.pageIndex = 0;

    component.winnerFilterChange(FilterWinner.ALL);

    expect(component.paginator.pageIndex).toBe(0);
    expect(spyGetMovieList).toHaveBeenCalled();
  });

  it('applyYearFilter() should set the paginator parameters', () => {
    const spyGetMovieList = spyOn(component, 'getMovies');

    component.applyYearFilter(123);
    expect(component.yearFilter).toBe(undefined);

    component.applyYearFilter(1999);
    expect(component.yearFilter).toBe(1999);

    expect(spyGetMovieList).toHaveBeenCalled();
  });
});
