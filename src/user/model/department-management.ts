import mongoose from "mongoose";

const departmentManagementSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    departments: {
        type: Array<{
            type: String, 
            description: String, 
            headOfDept: String, 
            customerFacing: Boolean,
            linkToStores: Array<{
                name: String, 
                location: String
            }>
        }>
    }
}, { timestamps: true })

const DepartmentManagement = mongoose.models.DepartmentManagement || mongoose.model("DepartmentManagement", departmentManagementSchema)

export default DepartmentManagement