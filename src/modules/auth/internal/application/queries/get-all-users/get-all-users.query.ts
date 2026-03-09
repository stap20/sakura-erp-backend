import { IQuery } from "src/shared/application/query.interface";

export class GetAllUsersQuery implements IQuery {
    constructor(
        public readonly offset: number,
        public readonly limit: number,
        public readonly content?: string,
        public readonly role?: string
    ) { }
}