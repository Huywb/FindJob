import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true },
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  avatarUrl: { type: String },
  roles: { type: String, enum: ['candidate', 'recruiter'], default: 'candidate' },
  metadata: { type: mongoose.Schema.Types.Mixed },
},{ timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;