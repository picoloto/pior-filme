import { NumberInput } from '@angular/cdk/coercion';
import { Movie } from './movie.model';
import { Pageable } from './pageable.model';
import { Sort } from './sort.model';

export interface MovieListDto {
  content: Movie[];
  pageable: Pageable;
  sort: Sort;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: Number;
  numberOfElements: Number;
  size: Number;
  totalElements: Number;
  totalPages: NumberInput;
}
