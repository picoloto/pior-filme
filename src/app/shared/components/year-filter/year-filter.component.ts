import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-year-filter',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './year-filter.component.html',
  styleUrl: './year-filter.component.scss',
})
export class YearFilterComponent implements AfterViewInit {
  // HTML Elements
  @ViewChild('yearFilterInput') yearFilterInput!: ElementRef;
  @Output() filterKeyUpEvent = new EventEmitter<number>();

  ngAfterViewInit() {
    this.applyYearFilter();
  }

  applyYearFilter(): void {
    fromEvent(this.yearFilterInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.filterKeyUpEvent.emit(res.length === 4 ? res : undefined);
      });
  }
}
