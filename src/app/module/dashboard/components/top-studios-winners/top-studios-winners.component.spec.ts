import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStudiosWinnersComponent } from './top-studios-winners.component';
import { MovieService } from '../../../../shared/services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TopStudiosWinnersComponent', () => {
  let component: TopStudiosWinnersComponent;
  let fixture: ComponentFixture<TopStudiosWinnersComponent>;
  let movieListService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopStudiosWinnersComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopStudiosWinnersComponent);
    component = fixture.componentInstance;

    movieListService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
