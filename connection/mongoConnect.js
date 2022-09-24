import mongoose from 'mongoose'


const connect = () => {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to Database...");
      })
      .catch((error) => console.log(`${error} Could not connect to DB`));
}

export default connect


 