import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { connectDB } from "src/mongodb";
import User from "src/auth/model/user";
import { PaymentDto } from "../dtos/payment.dto";
import Payment from "../model/payment";

@Injectable()
export class PaymentRepository {
    private readonly dbPassword: string;

    constructor (private configService: ConfigService) {
        this.dbPassword = this.configService.get<string>("DB_PASSWORD") || ""
    }

    async addPayment(userEmail: string, payment: PaymentDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const paymentInstance = await Payment.create({ userEmail, ...payment })
            return paymentInstance
        } catch (err) {
            throw err
        }
    }
}