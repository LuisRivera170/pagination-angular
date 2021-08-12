import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination.model';

@Component({
  selector: 'app-pagination-info',
  templateUrl: './pagination-info.component.html',
  styleUrls: ['./pagination-info.component.css']
})
export class PaginationInfoComponent implements OnInit {

  public initialElementNumber: number = 0;
  public finalElementNumber: number = 0;

  @Input()
  public pagination?: Pagination;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: any) {
    if (changes?.pagination?.currentValue) {
      const paginationObj = changes.pagination.currentValue;
      this.calcularPaginationInfo(paginationObj);
    }
  }

  private calcularPaginationInfo(paginationObj: Pagination) {
    if (paginationObj.pageable) {
      this.initialElementNumber = ((paginationObj.pageable?.pageNumber || 0) * (paginationObj.pageable?.pageSize || 0)) + 1;
      this.finalElementNumber = ((paginationObj.pageable?.pageNumber || 0) * (paginationObj.pageable?.pageSize || 0)) + (paginationObj.numberOfElements || 0);
    }
  }

}
