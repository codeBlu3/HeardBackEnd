import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, RelationId } from "typeorm";


@Entity()
@ObjectType()
export class UserAccount{
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly userID: number;

  @Column({unique: true, nullable: true})
  username?: string;

//if password null, stop register. should be done on auth strategy
  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  googleId?: string;


  @Column({ nullable: true , unique:true})
  userToken?: string;

}


