const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Order = require("./Order");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    trim: true,
  },
  coOp: {
    type: Schema.Types.ObjectId,
    ref: "CoOp",
  },
  orders: [Order.schema],
  Badges: [
    {
      type: Schema.Types.ObjectId,
      ref: "Badge",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
