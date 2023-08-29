import mongoose from "mongoose";

const acess = process.env.DATABASE_ACESS;

mongoose.set("strictQuery", true);
// mongoose.connect(`mongodb+srv://anyOne:MoreEvents1234@moreevents.3izlpjw.mongodb.net/MoreEvents`);

mongoose.connect(`mongodb+srv://MoreTrips:moretrips123@cluster0.tuy6p7j.mongodb.net/cluster0`);


let db = mongoose.connection;

export default db;