import mongoose from "mongoose";

// mongoose
//     .connect(process.env.MONGO_PROD_URL)
//     .then(() => console.log('db connected'))
//     .catch((err) => console.log(err));

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
