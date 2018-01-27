export class PageVO {
  constructor(public pageIndex: number,
              public pageSize: number,    // typescript 문법
              public totalCount: number,
              public pageSizeOptions?: number[]) {
    // this.pageIndex = pageIndex;           // es6 문법 (constructor parameter의 접근지시자:public을 없앤 후 할당.

    if (!this.pageSizeOptions) {
      this.pageSizeOptions = [5, 15, 30, 60, 90];
    }
  }
}
