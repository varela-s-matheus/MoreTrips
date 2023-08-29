import mongoose from "mongoose";

const acess = process.env.DATABASE_ACESS;

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://anyOne:MoreEvents1234@moreevents.3izlpjw.mongodb.net/MoreEvents`);


let db = mongoose.connection;

export default db;