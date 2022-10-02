import mongoose from 'mongoose';

const authenticationSchema = new mongoose.Schema({

    accountName: {
        type: String,
        required: true,
        default : "2FA Client"
    },
    email: {
        type: String,
        required: true
    },
    key:{
        type: String,
        required: true,
    }

})

export default mongoose.model('Authentication',authenticationSchema);