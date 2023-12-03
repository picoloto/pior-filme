import { NumberInput } from '@angular/cdk/coercion';
import { Sort } from './sort.model';

export interface Pageable {
  sort: Sort;
  offset: Number;
  pageSize: NumberInput;
  pageNumber: NumberInput;
  unpaged: boolean;
  paged: boolean;
}
