import mongoose from "mongoose";

const receivablesManagementSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    receivables: {
        type: Array<{
            cashier: String, 
            customerName: String, 
            amount: Number, 
            creationDate: String, 
            remainingBalance: Number, 
            status: {
                type: String,
                enum: ["partially paid", "unsettled", "settled"]
            }
        }>
    }
}, { timestamps: true })

const ReceivablesManagement = mongoose.models.ReceivablesManagement || mongoose.model("ReceivablesManagement", receivablesManagementSchema)

export default ReceivablesManagement