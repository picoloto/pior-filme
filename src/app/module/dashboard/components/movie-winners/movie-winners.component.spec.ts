import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWinnersComponent } from './movie-winners.component';

describe('MovieWinnersComponent', () => {
  let component: MovieWinnersComponent;
  let fixture: ComponentFixture<MovieWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieWinnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
