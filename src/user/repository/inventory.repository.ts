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
}