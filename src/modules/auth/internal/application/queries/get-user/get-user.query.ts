import { IQuery } from "src/shared/application/query.interface";

export class GetUserQuery implements IQuery {
    constructor(public readonly userId: string) { }
}