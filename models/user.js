import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      match: [
        /^09\d{8}$/,
        "Please enter a valid phone number. (ex: 0912345678)",
      ],
      required: true,
    },
    classAndSection: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const User = models.User || model("User", userSchema);
