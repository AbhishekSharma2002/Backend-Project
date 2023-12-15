import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connnetionInstant = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB !! DB HOST: ${connnetionInstant.connection.host}`)
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR", error);
        process.exit(1)
    }
}


export default connectDB