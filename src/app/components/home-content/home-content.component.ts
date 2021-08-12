import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination.model';
import { PaginationRequest } from 'src/app/models/pagination.request.model';
import { User } from 'src/app/models/user.model';
import { UsersPagination } from 'src/app/models/users-pagination.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  public users: Array<User> = [];
  public pagination: Pagination = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUserData();
  }

  private retrieveUserData(page: number = 0): void {
    const paginationRequest: PaginationRequest = {
      page: page,
      items: 10
    };
    this.userService
        .getPageableUsers(paginationRequest)
        .subscribe(
          (response: UsersPagination) => {
            this.users = response.content ? response.content : [];
            this.pagination = response;
          }, (error: Error) => {
            console.log(error);
          }
        )
  }

  goToPage(page: number): void {
    this.retrieveUserData(page);
  }

}
