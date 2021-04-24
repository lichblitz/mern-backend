import { connect, Schema, model } from "mongoose";

const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConnect = (dbUrl) => {
  connect(dbUrl, CONFIG, (error) => {
    if (error) return console.error(error);
    console.log("DB connection success");
  });
};

export { dbConnect, model, Schema };
