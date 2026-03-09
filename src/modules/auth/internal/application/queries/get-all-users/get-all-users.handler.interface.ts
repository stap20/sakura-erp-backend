import { IQueryHandler } from "src/shared/application/query.handler.interface";
import { GetAllUsersQuery } from "./get-all-users.query";
import { GetAllUsersResponse } from "./get-all-users.response";

export interface IGetAllUsersHandler extends IQueryHandler<GetAllUsersQuery, GetAllUsersResponse> {
}

export const IGetAllUsersHandler = Symbol('IGetAllUsersHandler')