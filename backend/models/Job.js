import mongoose from "mongoose";



const jobSchema = new mongoose.Schema({
    recuiter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    company_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
    isOpen: {
        type: Boolean,
        default: true
    }
},{ timestamps: true });

const Job = mongoose.model('Job', jobSchema);   
export default mongoose.model('Job', Job);