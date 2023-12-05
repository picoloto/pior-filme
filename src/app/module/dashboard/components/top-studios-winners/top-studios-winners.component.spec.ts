import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopStudiosWinnersComponent } from './top-studios-winners.component';
import { MovieService } from '../../../../service/movie/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Top_Studios_winners_Mock } from '../../../../shared/mocks/top-studios-winners.mock';

describe('TopStudiosWinnersComponent', () => {
  let component: TopStudiosWinnersComponent;
  let fixture: ComponentFixture<TopStudiosWinnersComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopStudiosWinnersComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopStudiosWinnersComponent);
    component = fixture.componentInstance;

    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTopStudiosWinners() should call getTopStudiosWinners() and return data', waitForAsync(() => {
    spyOn(movieService, 'getTopStudiosWinners').and.returnValue(
      of(Top_Studios_winners_Mock)
    );
    component.getTopStudiosWinners();
    fixture.detectChanges();

    expect(component.studioWinnerCount).toEqual(
      Top_Studios_winners_Mock.studios.slice(0, 3)
    );
  }));
});
