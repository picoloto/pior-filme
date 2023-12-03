export class Paginator {
  length: number;
  pageSize: number;
  pageIndex: number;
  hidePageSize: boolean;

  constructor(
    length?: number,
    pageSize?: number,
    pageIndex?: number,
    hidePageSize?: boolean
  ) {
    this.length = length ?? 0;
    this.pageSize = pageSize ?? 0;
    this.pageIndex = pageIndex ?? 0;
    this.hidePageSize = hidePageSize ?? true;
  }
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}
