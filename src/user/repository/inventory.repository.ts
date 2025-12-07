import { Injectable } from "@nestjs/common";
import { CategoryDto, CurrencyDto, InventoryItemDto, ThresholdSettingDto, UnitOfMeasurementDto, WriteOffRequestDto } from '../dtos/inventory-mangement.dto';
import InventoryManagement from '../model/inventory-management';
import User from 'src/auth/model/user';
import { ConfigService } from "@nestjs/config";
import { connectDB } from "src/mongodb";

@Injectable()
export class InventoryRepository {
    private readonly dbPassword: string;

    constructor (private configService: ConfigService) {
        this.dbPassword = this.configService.get<string>("DB_PASSWORD") || ""
    }

    async addInventory(userEmail: string, inventoryItem: InventoryItemDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await InventoryManagement.findOneAndUpdate(
                { userEmail },
                { $push: { inventoryItems: inventoryItem }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }

    async addThresholdSetting(userEmail: string, thresholdSetting: ThresholdSettingDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await InventoryManagement.findOneAndUpdate(
                { userEmail },
                { $push: { thresholdSettings: thresholdSetting }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }

    async addUnitOfMesurement(userEmail: string, unitOfMesurement: UnitOfMeasurementDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await InventoryManagement.findOneAndUpdate(
                { userEmail },
                { $push: { unitOfMesurement }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }

    async addWriteOffRequests(userEmail: string, writeOffRequest: WriteOffRequestDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await InventoryManagement.findOneAndUpdate(
                { userEmail },
                { $push: { writeOffRequests: writeOffRequest }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }

    async addCategories(userEmail: string, category: CategoryDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await InventoryManagement.findOneAndUpdate(
                { userEmail },
                { $push: { categories: category }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }

    async addCurrency(userEmail: string, currency: CurrencyDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await InventoryManagement.findOneAndUpdate(
                { userEmail },
                { $push: { currency }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }

    async getInventory(userEmail: string){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        const doc = await InventoryManagement.findOne({ userEmail }).lean().exec()
        if (doc && !Array.isArray(doc) && 'inventoryItems' in doc) {
            return doc.inventoryItems || []
        }
        return []
    }

    async getThresholdSettings(userEmail: string){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        const doc = await InventoryManagement.findOne({ userEmail }).lean().exec()
        if (doc && !Array.isArray(doc) && 'thresholdSettings' in doc) {
            return doc.thresholdSettings || []
        }
        return []
    }

    async getUnitOfMesurement(userEmail: string){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        const doc = await InventoryManagement.findOne({ userEmail }).lean().exec()
        if (doc && !Array.isArray(doc) && 'unitOfMesurement' in doc) {
            return doc.unitOfMesurement || []
        }
        return []
    }

    async getWriteOffRequests(userEmail: string){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        const doc = await InventoryManagement.findOne({ userEmail }).lean().exec()
        if (doc && !Array.isArray(doc) && 'writeOffRequests' in doc) {
            return doc.writeOffRequests || []
        }
        return []
    }

    async getCategories(userEmail: string){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        const doc = await InventoryManagement.findOne({ userEmail }).lean().exec()
        if (doc && !Array.isArray(doc) && 'categories' in doc) {
            return doc.categories || []
        }
        return []
    }

    async getCurrency(userEmail: string){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        const doc = await InventoryManagement.findOne({ userEmail }).lean().exec()
        if (doc && !Array.isArray(doc) && 'currency' in doc) {
            return doc.currency || []
        }
        return []
    }
}