export class CreateRecipeVersionCommand {
    constructor(
        public readonly productId: string,
        public readonly notes?: string | null,
    ) {}
}
