import { GetRecipeVersionResponse } from '../get-recipe-version/get-recipe-version.response';

export class GetRecipeVersionsByProductResponse {
    constructor(public readonly items: GetRecipeVersionResponse[]) {}
}
