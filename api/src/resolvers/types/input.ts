import { InputType, Field } from "type-graphql";

import { Recipe, Image } from "../../models/recipe";

@InputType()
export class RecipeInput implements Partial<Recipe> {
  @Field()
  recipeFoodieID: string 

  @Field()
  recipeName: string;

  @Field({ nullable: true })
  recipeDescription: string;

  @Field()
  recipePrice: number;

}


@InputType()
export class ImageInput implements Partial<Image> {
  @Field()
  imagePath: string;

/*
  @Field({ nullable: true })
  imageDescription: string;
*/

}
