export class UpdateRecipeVersionCommand {
    constructor(
        public readonly recipeVersionId: string,
        public readonly notes: string | null,
    ) {}
}
