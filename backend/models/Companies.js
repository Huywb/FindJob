import mongoose from "mongoose";



const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo_url: {
        type: String,
        required: true
    }
},{ timestamps: true });

const Companies = mongoose.model('Companies', companySchema);
export default Companies;