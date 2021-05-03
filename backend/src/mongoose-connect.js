import mongoose from "mongoose";

const url =
  "mongodb+srv://oneonly:oMQxZ3WqzxaehutE@cluster0.hzrve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const connectionParams={
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// }

mongoose.Promise = Promise;
mongoose
  .connect(url, {
    promiseLibrary: Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
