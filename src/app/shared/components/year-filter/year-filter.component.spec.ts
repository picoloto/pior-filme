import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { YearFilterComponent } from './year-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function generateKeyUpEvent(value: string): KeyboardEvent {
  const event: KeyboardEvent = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperty(event, 'target', { value: { value } });
  return event;
}

describe('YearFilterComponent', () => {
  let component: YearFilterComponent;
  let fixture: ComponentFixture<YearFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearFilterComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(YearFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngAfterViewInit() must prepare for trigger keyup event when filter is used', fakeAsync(() => {
    spyOn(component.filterKeyUpEvent, 'emit');
    const mockInputElement = document.createElement('input');
    component.yearFilterInput = {
      nativeElement: mockInputElement,
    };
    component.ngAfterViewInit();
    mockInputElement.value = '1999';
    mockInputElement.dispatchEvent(new Event('keyup'));
    tick(500);
    expect(component.filterKeyUpEvent.emit).toHaveBeenCalled();

    mockInputElement.value = '';
    mockInputElement.dispatchEvent(new Event('keyup'));
    tick(500);
    expect(component.filterKeyUpEvent.emit).toHaveBeenCalled();
  }));
});
