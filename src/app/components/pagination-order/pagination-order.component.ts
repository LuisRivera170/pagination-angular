import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-order',
  templateUrl: './pagination-order.component.html',
  styleUrls: ['./pagination-order.component.css']
})
export class PaginationOrderComponent implements OnInit {

  public direction: string = 'ASC';

  @Input()
  public sort?: Array<any>;

  @Output()
  public changeOrder: EventEmitter<string> = new EventEmitter();

  @Output()
  public changeDirection: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeOrder(event: any) {
    this.changeOrder.emit(event.target.value);
  }

  onChangeDirection(direction: string) {
    this.direction = direction;
    this.changeDirection.emit(direction);
  }

}
