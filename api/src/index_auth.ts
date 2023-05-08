import "reflect-metadata";
import express from 'express';
import cors from 'cors';
//import session from 'express-session';
/*
import passport from 'passport';
import {Strategy as GoogleStrategy } from 'passport-google-oauth20'
import {Strategy as FacebookStrategy } from 'passport-facebook'
import {Strategy as LocalStrategy } from 'passport-local'
*/
import { createConnection, getConnection , getRepository } from "typeorm";
import { typeOrmConfig } from './config';
import {User} from './models/user'





async function main() {
  //console.log('sdfds')
  //console.log(User)
  const conn = await createConnection(typeOrmConfig);
  //console.log(conn)
  const repo = conn.getRepository(User)
  console.log(repo)

//  const server = new ApolloServer({ schema });
//  await server.listen(7000);
//  console.log("Server has started!");
}
main();

/*
const conn2 = getConnection('db2Connection')

console.log(conn2)

const repo = getRepository(User, 'db2Connection')
//const  repo = getConnection().getRepository(User)




/*
const app = express();

async function asCreateCon(){
  try{
    const conn = await createConnection(typeOrmConfig);
     await conn.synchronize(true);
    console.log('connection successful')
  }
  catch(err) {
    console.log(err)
  }
}

 asCreateCon().catch((err => {console.log(err)}))

const conn = getConnection()
console.log(conn)
const userRepo = getRepository(User)
//.getRepository(User)


// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:19006", credentials: true }))

app.set("trust proxy", 1);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
    }
  }))


app.use(passport.initialize());
app.use(passport.session());

// Local 
// needs to connect database, typeORM






app.get("/", (req, res) => {
  res.send("test");
})


app.get("/register", (req, res) => {
  res.send("test");
})


app.post("/login", (req, res) => {
  console.log(req.body)
})



/*
app.get("/getuser", (req, res) => {
  res.send(req.user);
})

app.get("/auth/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send("done");
  }
})

*/

//app.listen(process.env.PORT || 4000, () => {
//  console.log("Server Starrted");
//})



/*
passport.serializeUser((user: any , done: any) => {
  return done(null, user._id);
});

passport.deserializeUser((id: string, done: any) => {

  User.findById(id, (err: Error, doc: any) => {
    // Whatever we return goes to the client and binds to the req.user property
    return done(null, doc);
  })
})
*/


//Google

/*

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'https://gallant-hodgkin-fb9c52.netlify.app', session: true }),
  function (req, res) {
    res.redirect('https://gallant-hodgkin-fb9c52.netlify.app');
  });


passport.use(new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: "/auth/google/callback"
},
  function (_: any, __: any, profile: any, cb: any) {

    User.findOne({ googleId: profile.id }, async (err: Error, doc: IMongoDBUser) => {

      if (err) {
        return cb(err, null);
      }

      if (!doc) {
        const newUser = new User({
          googleId: profile.id,
          username: profile.name.givenName
        });

        await newUser.save();
        cb(null, newUser);
      }
      cb(null, doc);
    })

  }));


*/


