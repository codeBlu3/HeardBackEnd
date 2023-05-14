import { Resolver, Query, FieldResolver, Arg, Root, Mutation, Ctx, Int, ID } from "type-graphql"
import { getRepository, Repository , getMongoRepository, MongoRepository} from "typeorm"

//import { Conversation, Message  } from "../models/conversation"
import { UserAccount} from "../models/UserAccount"



//resolvers and queries on graphql should match 
@Resolver(of =>  UserAccount)
export class UserResolver {
  constructor(
     private readonly userRepository: Repository<UserAccount>,
  ) {
    this.userRepository  = getRepository(UserAccount,'dbPgCon') 
  }


  @Query(returns => [UserAccount])
  async getAllUsers() {
  try {
    const userList = await this.userRepository.find()
    console.log(userList)
    return userList 
    }
    catch (e) {
      console.log(e)
  }

  }
/*
//create convo
  @Mutation(returns => Conversation)
  async addConvo(@Arg("conversationMembers", type => [String]) conversationMembers: string[] ) {
    const newconvo = new Conversation()
    newconvo.members = conversationMembers
    return await this.conversationRepository.save(newconvo)
  }

//seems like an erroneous design? , always search object ID by conversation ID
  @Mutation(returns => Conversation)
  async findOrCreateConvoByMembers(@Arg("conversationMembers", type => [String]) conversationMembers: string[] ) {
    console.log(conversationMembers)
    console.log(typeof(conversationMembers))
    let convo 
    try {
       convo = await this.conversationRepository.findOne({where: {members :  {$all: conversationMembers}}})
       if (!convo) {
          const newconvo = new Conversation()
          newconvo.members = conversationMembers
          convo = await this.conversationRepository.save(newconvo)
       } 
    }

    catch (e) {
      console.log(e)
  }
    return convo
}

// new conversation?




// Mutate  add message


*/

/*
this is a cross over  -- no, no user repository was queried in here

  @Query(returns => [Recipe])
  async getRecipes(): Promise<Recipe[]> {
    const res = await this.recipeRepository.find()
    console.log(res)
    return  res 
  }

  @Mutation(returns => Recipe)
  ddRecipe(@Arg("recipeInput") recipeInput: RecipeInput): Promise<Recipe> {
    const recipe = this.recipeRepository.create({
      ...recipeInput,
    })
    return this.recipeRepository.save(recipe)
  }

*/
}

