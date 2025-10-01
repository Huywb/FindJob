import mongoose from "mongoose";


const SavedJobSchema = new mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'Job',
        required: true
    },
    candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{ timestamps: true });
const SavedJob = mongoose.model('SavedJob', SavedJobSchema);
export default SavedJob;