const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connection successful');
  });

mongoose.connect();
const app = require('./app');

//console.log(app.get('env'));
//console.log(process.env);
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
