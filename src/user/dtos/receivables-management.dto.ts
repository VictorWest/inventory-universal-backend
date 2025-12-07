import { IsIn, IsNumber, IsString } from "class-validator";

export class ReceivablesDto {
    @IsString()
    readonly cashier: string

    @IsString()
    readonly customerName: string

    @IsNumber()
    readonly amount: number

    @IsString()
    readonly creationDate: string

    @IsNumber()
    readonly remainingBalance: number

    @IsString()
    @IsIn(["partially paid", "unsettled", "settled"])
    readonly status: string
}