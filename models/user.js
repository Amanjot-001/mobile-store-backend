import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username cannot be blank"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password cannot be blank"],
    },
});

export const User = mongoose.model("User", UserSchema);
