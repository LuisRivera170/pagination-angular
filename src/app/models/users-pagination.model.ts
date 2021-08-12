import { Pagination } from "./pagination.model";
import { User } from "./user.model";

export class UsersPagination extends Pagination {

    content?: Array<User>;

}