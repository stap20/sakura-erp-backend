import { GetUserQuery } from "./get-user.query";
import { GetUserResponse } from "./get-user.response";
import { IQueryHandler } from "src/shared/application/query.handler.interface";

export interface IGetUserHandler extends IQueryHandler<GetUserQuery, GetUserResponse> { }

export const IGetUserHandler = Symbol('IGetUserHandler');