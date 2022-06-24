import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo';


import mongoDb from './mongoDb.js'
import { passportMiddleware, passportSessionHandler } from './src/middlewares/passport.js'
import { authRouter } from './src/routers/authRouter.js'
import { usersRouter } from './src/routers/usersRouter.js'


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    store: MongoStore.create({ mongoUrl: mongoDb.sessions }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 500000,
    },
  })
);
app.use(passportMiddleware)
app.use(passportSessionHandler)



app.use('/api/usuarios', usersRouter)
app.use('/auth', authRouter)


// listen
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})







