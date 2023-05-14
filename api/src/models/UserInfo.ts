import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, ObjectIdColumn,ObjectID, Column, OneToMany, ManyToOne, RelationId } from "typeorm";


@Entity()
@ObjectType()
export class UserInfo{
  @Field(type => ID)
  @ObjectIdColumn()
  readonly userinfoID: ObjectID; // read only?, what will happen //maps tot _id


  @Field()
  @Column()
  useracountID: string;

  @Field()
  @Column()
  firstname: string;

  @Field()
  @Column()
  lastname: string;

  @Field()
  @Column()
  language: string;

  @Field()
  @Column()
  darkmode: boolean;

}


