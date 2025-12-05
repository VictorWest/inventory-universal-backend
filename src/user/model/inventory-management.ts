import mongoose from "mongoose";

const inventoryManagement = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    inventoryItems: {
        type: Array<{sku: String, name: String, category: String, supplier: String, department: String, price: Number, stock: Number, status: String}>
    },
    thresholdSettings: {
        type: Array<{itemName: Number, currentStock: Number, reorderLevel: Number, minStock: Number, maxStock: Number, autoAlerts: Boolean, status: String}>
    }
})