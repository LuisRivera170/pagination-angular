import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from 'src/app/models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public currentPage: number = 0;
  public totalPages: number = 0;
  public pageNumbers: Array<number> = [];

  @Input()
  public pagination?: Pagination;

  @Output()
  public goToPage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    if (changes?.pagination?.currentValue) {
      const paginationObj = changes.pagination.currentValue;
      this.calculatePagination(paginationObj);
    }
  }

  private calculatePagination(paginationObj: Pagination) {    
    this.currentPage = paginationObj?.pageable?.pageNumber || 0;
    this.totalPages = paginationObj?.totalPages || 0;
    
      const initialRange: number = Math.min(Math.max(0, this.currentPage - 4), this.totalPages - 5);
      const finalRange: number = Math.max(Math.min(this.totalPages, this.currentPage + 4), 9);
  
      this.pageNumbers = new Array(finalRange - initialRange)
        .fill(0)
        .map((_, index) => initialRange + index);
  }

  public sendToPage(page: number): void {
    this.goToPage.emit(page);
  }
  
}
