import { GetRecipeVersionResponse } from '../get-recipe-version/get-recipe-version.response';

export class GetAllRecipeVersionsResponse {
    constructor(public readonly items: GetRecipeVersionResponse[]) {}
}
