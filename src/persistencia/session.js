import session from 'express-session'
import MongoStore from 'connect-mongo';

import { uri } from './mongoSessionsString.js';

export default session({
    store: MongoStore.create({ mongoUrl: uri }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 500000,
    },
  })