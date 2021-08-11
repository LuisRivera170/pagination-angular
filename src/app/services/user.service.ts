import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from '../models/pagination.model';
import { PaginationRequest } from '../models/pagination.request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USERSPAGEDENDPOINT: string = environment.urlBackend + '/users/paged';

  constructor(private http: HttpClient) { }

  public getPageableUsers(paginationRequest: PaginationRequest): Observable<Pagination> {
    return this.http.post<Pagination>(this.USERSPAGEDENDPOINT, paginationRequest);
  }

}
