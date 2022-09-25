import mongoose from 'mongoose';
import {IUser} from "../Interface";

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    password: {
        type:String,
    }
})

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);