export class CategoryEntity {
    id: string;
    name: string;
    description: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<CategoryEntity>) {
        Object.assign(this, data);
    }
}
