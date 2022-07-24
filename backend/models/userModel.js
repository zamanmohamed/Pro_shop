import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

/*bcrypt වලින් encrypt වෙලා momgoDB හි save වෙලා ඇති password එක dcrypt කරලා 
 අපි enter කරන  password එක සමග mathc කර comapre කිරීමට මෙම method 
 එක use කරයි */
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/*අපි enter කරන password එක bcrypt වලින් encrypt කර mongodb හි save
කිරීමට මෙම method එක use කරයි  */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
