import { createConnection } from 'typeorm';
import { app } from './app';

createConnection()
  .then((_connection) => {
    app.listen(3333);
  })
  .catch((err) => console.log(err));
