import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleWinnersComponent } from './multiple-winners.component';
import { MovieService } from '../../../../shared/services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MultipleWinnersComponent', () => {
  let component: MultipleWinnersComponent;
  let fixture: ComponentFixture<MultipleWinnersComponent>;
  let movieListService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleWinnersComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleWinnersComponent);
    component = fixture.componentInstance;

    movieListService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
