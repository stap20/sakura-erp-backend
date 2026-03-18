export class UpdateItemCommand {
    constructor(
        public readonly id: string,
        public readonly name?: string,
        public readonly measureUnit?: string,
        public readonly categoryId?: string | null,
    ) {}
}
