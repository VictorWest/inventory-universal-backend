import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { connectDB } from "src/mongodb";
import User from "src/auth/model/user";
import ProcurementManagement from "../model/procurement-management";
import { ProcurementDto } from "../dtos/procurement-management.dto";

@Injectable()
export class ProcurementRepository {
    private readonly dbPassword: string;

    constructor (private configService: ConfigService) {
        this.dbPassword = this.configService.get<string>("DB_PASSWORD") || ""
    }

    async addProcurement(userEmail: string, procurement: ProcurementDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await ProcurementManagement.findOneAndUpdate(
                { userEmail },
                { $push: { requests: procurement }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }
}