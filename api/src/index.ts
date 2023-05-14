// must be at top
import "reflect-metadata"

// db connection 
//import { createConnection } from "typeorm"
import {createConnections, getRepository, getMongoRepository } from "typeorm"
import {pgConfig, mgConfig } from './config'

//models
import {Recipe, Image} from  './models/recipe'
import {Foodie} from  './models/foodie'
import {Conversation, Message} from  './models/conversation'
import {Store} from  './models/store'

// gql 
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"

//resolvers
//import { RecipeResolver} from "./resolvers/recipe-resolver"
import { ConversationResolver} from "./resolvers/conversation-resolver"
import { UserResolver} from "./resolvers/userinfo-resolver"

// main 
async function main() {
  try {
    const conns = await createConnections([pgConfig, mgConfig])

    const schema = await buildSchema({
    	resolvers: [UserResolver, ConversationResolver],
    })


    const server = new ApolloServer({ schema })
    const {url} = await server.listen(7000)
    console.log(`Server has started!, on ${url}`)
  } 
  catch (err) {
    console.error(err)
  }
}

main()

/*
import {Image} from  './models/image'
import {Review} from  './models/review'

    const recipeRep  = conn.getRepository(Recipe)
    const storeRep  = conn.getRepository(Store)
    const imageRep  = conn.getRepository(Image)
    //const convoRep  = getMongoRepository(Conversation,'dbMgCon')
    //const convoList = await convoRep.find({select: ['conversationID']})
    //console.log(convoList)




*/
//    const fid = '6138fbc53fa38f02aa1a720d'
//    const recipeRep  = getMongoRepository(Recipe,'dbMgCon')
//    const storeRep  = getRepository(Store, 'dbPgCon')
//    const res:any= await recipeRep.findOne(fid)
    //const rest:any= await recipeRep.find()
    //console.log(rest)


    //console.log(res)

    /*
    const newrecipe = new Recipe()
    newrecipe.recipeName = 'adobo'
    newrecipe.recipePrice = 25.1 
    newrecipe.recipeDescription= 'sdfsdfsdf' 
    newrecipe.images = [ 
      new Image('kervin_panot.jpeg', 'tesetset'),
      new Image('kervin_panot.jpeg', 'tesetset') 
    ]
    */
//    await recipeRep.save(res)

    /*
    */

/*

//query item and add image
//attachedimage
*/

//    const syncres = await conn.synchronize() 

/*
    const convoRep  = getMongoRepository(Conversation,'dbMgCon')
    console.log(convoRep)
    const convoList = await this.conversationRepository.find({select: ['conversationID']})
    const newconvo = new Conversation()
    await convoRep.save(newconvo)
    newconvo.members = ['491946d8-c936-4331-8962-0f2b21122953', 'e1541466-e1ba-44b3-bba5-0f272592abfb'] 
    newconvo.messages = [ 
      new Message('491946d8-c936-4331-8962-0f2b21122953', 'hello'),
    ]

    const rest:any= await convoRep.find()
    console.log(rest)

*/

