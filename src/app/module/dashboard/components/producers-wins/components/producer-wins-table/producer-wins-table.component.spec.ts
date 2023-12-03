import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerWinsTableComponent } from './producer-wins-table.component';

describe('ProducerWinsTableComponent', () => {
  let component: ProducerWinsTableComponent;
  let fixture: ComponentFixture<ProducerWinsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducerWinsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducerWinsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
