import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProducersWinsComponent } from './producers-wins.component';
import { MovieService } from '../../../../service/movie/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Min_Max_Win_Producers_Mock } from '../../../../shared/mocks/min-max-win-producers.mock';

describe('ProducersWinsComponent', () => {
  let component: ProducersWinsComponent;
  let fixture: ComponentFixture<ProducersWinsComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersWinsComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProducersWinsComponent);
    component = fixture.componentInstance;

    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getMinMaxWinProducers() should call getMinMaxWinProducers() and return data', waitForAsync(() => {
    spyOn(movieService, 'getMinMaxWinProducers').and.returnValue(
      of(Min_Max_Win_Producers_Mock)
    );
    component.getMinMaxWinProducers();
    fixture.detectChanges();

    expect(component.producerMaxInterval).toEqual(
      Min_Max_Win_Producers_Mock.max
    );
    expect(component.producerMinInterval).toEqual(
      Min_Max_Win_Producers_Mock.min
    );
  }));
});
