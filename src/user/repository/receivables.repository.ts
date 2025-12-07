import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { connectDB } from "src/mongodb";
import User from "src/auth/model/user";
import { ReceivablesDto } from "../dtos/receivables-management.dto";
import ReceivablesManagement from "../model/receivables-management";

@Injectable()
export class ReceivablesRepository {
    private readonly dbPassword: string;

    constructor (private configService: ConfigService) {
        this.dbPassword = this.configService.get<string>("DB_PASSWORD") || ""
    }

    async addReceivable(userEmail: string, receivable: ReceivablesDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await ReceivablesManagement.findOneAndUpdate(
                { userEmail },
                { $push: { receivables: receivable }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }
}