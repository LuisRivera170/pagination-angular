import { Pageable } from "./pageable.model";
import { Sort } from "./sort.model";

export class Pagination {

    content?: Array<any>;
    
    pageable?: Pageable;

    totalPages?: number;

    totalElements?: number;

    last?: boolean;

    numberOfElements?: number;

    first?: boolean;

    size?: number;

    number?: number;

    sort?: Sort;

    empty?: boolean;

}