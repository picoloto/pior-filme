import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultipleWinnersComponent } from './multiple-winners.component';
import { MovieService } from '../../../../shared/services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Multiple_Winners_Mock } from '../../../../shared/mocks/multiple-winners.mock';

describe('MultipleWinnersComponent', () => {
  let component: MultipleWinnersComponent;
  let fixture: ComponentFixture<MultipleWinnersComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleWinnersComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleWinnersComponent);
    component = fixture.componentInstance;

    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getMultipleWinnersList() should call getMultipleWinners() and return data', waitForAsync(() => {
    spyOn(movieService, 'getMultipleWinners').and.returnValue(
      of(Multiple_Winners_Mock)
    );
    component.getMultipleWinnersList();
    fixture.detectChanges();

    expect(component.yearWinnerCount).toEqual(Multiple_Winners_Mock.years);
  }));
});
