import mongoose from "mongoose";


const applicationsSchema = new mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    cadidate_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum: ['applied', 'reviewed', 'interviewed', 'hired', 'rejected'],
        default: 'applied'
    },
    resume: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
},{ timestamps: true });

const Applications = mongoose.model('Applications', applicationsSchema);
export default Applications;