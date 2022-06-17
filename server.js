import express from 'express'
import session from 'express-session'
import passport from 'passport'
import { Strategy } from 'passport-local'

import mongoDb from './mongoDb.js'

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





