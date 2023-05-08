import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, RelationId } from "typeorm";

//import { Rate } from "./rate";
//import { User } from "./user";

import {Recipe} from './recipe'

@Entity()
@ObjectType()
export class Image{
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly imageID: number;

  @Field()
  @Column()
  imagePath: string;

  @Field(type => Recipe)
  @ManyToOne(() => Recipe, recipe => recipe.images)
  recipe: Recipe;

}
