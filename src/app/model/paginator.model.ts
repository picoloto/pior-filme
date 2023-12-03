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
