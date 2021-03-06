import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password_digest: {
      type: String,
      required: true,
      minLength: 6,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    started: {
      type: Date,
      default: Date.now(),
    },
    pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
    location: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
