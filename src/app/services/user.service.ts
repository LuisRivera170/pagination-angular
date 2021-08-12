import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination.model';
import { PaginationRequest } from '../models/pagination.request.model';
import { UsersPagination } from '../models/users-pagination.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USERSPAGEDENDPOINT: string = environment.urlBackend + '/users/paged';

  constructor(private http: HttpClient) { }

  public getPageableUsers(paginationRequest: PaginationRequest): Observable<UsersPagination> {
    return this.http.post<UsersPagination>(this.USERSPAGEDENDPOINT, paginationRequest);
  }

}
