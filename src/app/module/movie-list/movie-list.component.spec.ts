import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieService } from '../../shared/service/movie.service';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieListService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;

    movieListService = TestBed.inject(MovieService);
  });

  it('should create the MovieListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set the paginator parameters', () => {
    component.movieListDto = {
      content: [
        {
          id: 11,
          year: 1981,
          title: 'Mommie Dearest',
          studios: ['Paramount Pictures'],
          producers: ['Frank Yablans'],
          winner: true,
        },
        {
          id: 12,
          year: 1981,
          title: 'Endless Love',
          studios: ['PolyGram', 'Universal Studios'],
          producers: ['Dyson Lovell'],
          winner: false,
        },
        {
          id: 13,
          year: 1981,
          title: "Heaven's Gate",
          studios: ['United Artists'],
          producers: ['Joann Carelli'],
          winner: false,
        },
        {
          id: 14,
          year: 1981,
          title: 'The Legend of the Lone Ranger',
          studios: ['Associated Film Distribution', 'Universal Studios'],
          producers: ['Walter Coblenz'],
          winner: false,
        },
        {
          id: 15,
          year: 1981,
          title: 'Tarzan, the Ape Man',
          studios: ['MGM', 'United Artists'],
          producers: ['John Derek'],
          winner: false,
        },
        {
          id: 16,
          year: 1982,
          title: 'Inchon',
          studios: ['MGM'],
          producers: ['Mitsuharu Ishii'],
          winner: true,
        },
        {
          id: 17,
          year: 1982,
          title: 'Annie',
          studios: ['Columbia Pictures'],
          producers: ['Ray Stark'],
          winner: false,
        },
        {
          id: 18,
          year: 1982,
          title: 'Butterfly',
          studios: ['Analysis Film Releasing'],
          producers: ['Matt Cimber'],
          winner: false,
        },
        {
          id: 19,
          year: 1982,
          title: 'Megaforce',
          studios: ['20th Century Fox'],
          producers: ['Albert S. Ruddy'],
          winner: false,
        },
        {
          id: 20,
          year: 1982,
          title: 'The Pirate Movie',
          studios: ['20th Century Fox'],
          producers: ['David Joseph'],
          winner: false,
        },
      ],
      pageable: {
        sort: {
          unsorted: true,
          sorted: false,
          empty: true,
        },
        offset: 10,
        pageSize: 10,
        pageNumber: 1,
        unpaged: false,
        paged: true,
      },
      last: false,
      totalPages: 21,
      totalElements: 206,
      size: 10,
      number: 1,
      sort: {
        unsorted: true,
        sorted: false,
        empty: true,
      },
      first: false,
      numberOfElements: 10,
      empty: false,
    };

    component.setPaginatorParameters();

    expect(component.paginator.length).toBe(206);
    expect(component.paginator.pageSize).toBe(10);
  });
});
