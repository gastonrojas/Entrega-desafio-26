import express from 'express'
import parseArgs from 'minimist';
import 'dotenv/config';

import connectSession from './src/persistencia/session.js'
import { passportMiddleware, passportSessionHandler } from './src/middlewares/passport.js';
import { authRouter } from './src/routers/authRouter.js';
import { usersRouter } from './src/routers/usersRouter.js';
import { randomNumbersRouter } from './src/routers/randomRouter.js';
import { infoRouter } from './src/routers/infoRouter.js';

const app = express();

const args = parseArgs(process.argv.slice(2));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(connectSession);
app.use(passportMiddleware);
app.use(passportSessionHandler);

app.use('/api/usuarios', usersRouter);
app.use('/auth', authRouter);
app.use('/api/randoms', randomNumbersRouter)
app.use('/info', infoRouter);

// listen
const PORT = args.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`escuchando en puerto ${server.address().port}`);
});


