const mongoose = require('mongoose');

console.log(process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`I'm connected to the db ! `))
  .catch(err => console.error('Error connecting to mongo', err));
