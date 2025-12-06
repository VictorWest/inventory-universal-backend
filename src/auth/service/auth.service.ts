import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserAccountDto } from '../dto/create-user.dto';
import bcrypt from "bcrypt"
import { connectDB } from 'src/mongodb';
import User from '../model/user';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
    private readonly dbPassword: string;

    constructor (private configService: ConfigService) {
        this.dbPassword = this.configService.get<string>("DB_PASSWORD") || ""
    }

    async create(userAccountDto: UserAccountDto){
        const { fullName, businessName, email, password } = userAccountDto

        const hashedPassword  = await bcrypt.hash(password, 10)

        await connectDB(this.dbPassword)
        await User.create({ fullName, businessName, email, password: hashedPassword })
    }

    async login(loginDto: LoginDto){
        const { email, password } = loginDto

        await connectDB(this.dbPassword)
        const user = await User.findOne({ email })

        if (!user){
            throw new Error("User not found")
        }

        if (await bcrypt.compare(password, user.password)){
            return { 
                id: user.id,
                email
            }
        } 

        throw new Error("Incorrect password")
    }
}
