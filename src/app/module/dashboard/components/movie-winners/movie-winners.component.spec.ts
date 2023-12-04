import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWinnersComponent } from './movie-winners.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from '../../../../shared/services/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
});
