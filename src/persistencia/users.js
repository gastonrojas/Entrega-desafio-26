import mongoose from 'mongoose';
import mongoDb from '../../mongoDb.js'

await mongoose.connect(mongoDbConnectionString.users);


const db = mongoose.model('users', {
    id: Number,
    nombre: String,
    descripcion: String,
    foto: String,
    precio: Number,
    stock: Number,
  });