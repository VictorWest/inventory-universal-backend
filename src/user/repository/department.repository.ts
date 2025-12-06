import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DepartmentDto } from "../dtos/department-management.dto";
import { connectDB } from "src/mongodb";
import User from "src/auth/model/user";
import DepartmentManagement from "../model/department-management";

@Injectable()
export class DepartmentRepository {
    private readonly dbPassword: string;

    constructor (private configService: ConfigService) {
        this.dbPassword = this.configService.get<string>("DB_PASSWORD") || ""
    }

    async addDepartment(userEmail: string, department: DepartmentDto){
        await connectDB(this.dbPassword)

        const user = await User.findOne({ email: userEmail })

        if (!user){
            throw new Error("User not found")
        }

        try {
            const updated = await DepartmentManagement.findOneAndUpdate(
                { userEmail },
                { $push: { departments: department }, $setOnInsert: { userEmail } },
                { upsert: true, new: true }
            ).exec()

            return updated
        } catch (err) {
            throw err
        }
    }
}