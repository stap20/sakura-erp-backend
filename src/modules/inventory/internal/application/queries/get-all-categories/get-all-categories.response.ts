export interface CategorySummary {
    id: string;
    name: string;
    description: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export class GetAllCategoriesResponse {
    constructor(public readonly categories: CategorySummary[]) {}
}
