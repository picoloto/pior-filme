import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersWinsComponent } from './producers-wins.component';
import { MovieService } from '../../../../shared/services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProducersWinsComponent', () => {
  let component: ProducersWinsComponent;
  let fixture: ComponentFixture<ProducersWinsComponent>;
  let movieListService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersWinsComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProducersWinsComponent);
    component = fixture.componentInstance;

    movieListService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
