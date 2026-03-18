export class CreateItemCommand {
    constructor(
        public readonly name: string,
        public readonly type: string,
        public readonly measureUnit: string,
        public readonly categoryId?: string | null,
    ) {}
}
