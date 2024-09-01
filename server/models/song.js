import { model, Schema, ObjectId } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    artist: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
    },
    album: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
    },
    genre: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
      }
},
{ timestamps: true }
);

export default model("Song", schema);