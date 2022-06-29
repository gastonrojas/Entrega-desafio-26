import { Router } from "express";

import path from "path";
import {fork} from 'child_process'


export const randomNumbersRouter = new Router()


randomNumbersRouter.get('/', (req, res)=>{
    let cant
    const query = req.query.cant
    
    if (query && query < 1001 && query > 0) cant = query
    else cant = 100000
    
    const random = fork(path.resolve(process.cwd() + '/src/api/randomNumbers.js'))
    random.on('message', msg=>{
        if (msg === 'ready') random.send(cant)
        else res.json(msg)
    })
})

