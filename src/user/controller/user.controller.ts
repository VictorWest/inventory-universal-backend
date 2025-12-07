import { Body, Controller, HttpException, HttpStatus, Param, Post, Query, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { InventoryItemDto, ThresholdSettingDto, UnitOfMeasurementDto, WriteOffRequestDto, CategoryDto, CurrencyDto } from '../dtos/inventory-mangement.dto';
import { ResponseDto } from 'src/dtos/response.dto';
import { ErrorDto } from 'src/dtos/error.dto';
import { DepartmentDto } from '../dtos/department-management.dto';
import { SupplierDto } from '../dtos/supplier-management.dto';
import { ReceivablesDto } from '../dtos/receivables-management.dto';
import { CreditorsDto } from '../dtos/creditors-management.dto';
import { ProcurementDto } from '../dtos/procurement-management.dto';
import { UserManagementDto } from '../dtos/user-management.dto';
import { PaymentDto } from '../dtos/payment.dto';
import { CustomerDto } from '../dtos/customer.dto';
import type { IndustryName } from 'src/interface/industry';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('add-inventory/:userEmail')
    async addInventory(@Param('userEmail') userEmail: string, @Body() inventoryItem: InventoryItemDto){
        try {
            const inventory = await this.userService.addInventory(userEmail, inventoryItem)
            return new ResponseDto(true, "Inventory item added successfully", inventory)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add inventory item", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-threshold-setting/:userEmail')
    async addThresholdSetting(@Param('userEmail') userEmail: string, @Body() thresholdSetting: ThresholdSettingDto){
        try {
            const threshold = await this.userService.addThresholdSetting(userEmail, thresholdSetting)
            return new ResponseDto(true, "Threshold setting added successfully", threshold)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add threshold setting", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-measurement/:userEmail')
    async addUnitOfMesurement(@Param('userEmail') userEmail: string, @Body() unitOfMesurement: UnitOfMeasurementDto){
        try {
            const measurement = await this.userService.addUnitOfMesurement(userEmail, unitOfMesurement)
            return new ResponseDto(true, "Unit of measurement added successfully", measurement)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add unit of measurement", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-write-off-request/:userEmail')
    async addWriteOffRequests(@Param('userEmail') userEmail: string, @Body() writeOffRequest: WriteOffRequestDto){
        try {
            const writeOff = await this.userService.addWriteOffRequests(userEmail, writeOffRequest)
            return new ResponseDto(true, "Write-off request added successfully", writeOff)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add write-off request", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-category/:userEmail')
    async addCategories(@Param('userEmail') userEmail: string, @Body() category: CategoryDto){
        try {
            const categories = await this.userService.addCategories(userEmail, category)
            return new ResponseDto(true, "Category added successfully", categories)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add category", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-currency/:userEmail')
    async addCurrency(@Param('userEmail') userEmail: string, @Body() currency: CurrencyDto){
        try {
            const currencies = await this.userService.addCurrency(userEmail, currency)
            return new ResponseDto(true, "Currency added successfully", currencies)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add currency", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-department/:userEmail')
    async addDepartment(@Param('userEmail') userEmail: string, @Body() department: DepartmentDto){
        try {
            const departments = await this.userService.addDepartment(userEmail, department)
            return new ResponseDto(true, "Department added successfully", departments)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add department", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-supplier/:userEmail')
    async addSupplier(@Param('userEmail') userEmail: string, @Body() supplier: SupplierDto){
        try {
            const suppliers = await this.userService.addSupplier(userEmail, supplier)
            return new ResponseDto(true, "Supplier added successfully", suppliers)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add supplier", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-receivable/:userEmail')
    async addReceivable(@Param('userEmail') userEmail: string, @Body() receivable: ReceivablesDto){
        try {
            const receivables = await this.userService.addReceivable(userEmail, receivable)
            return new ResponseDto(true, "Receivable added successfully", receivables)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add receivable", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-creditor/:userEmail')
    async addCreditor(@Param('userEmail') userEmail: string, @Body() creditor: CreditorsDto){
        try {
            const creditors = await this.userService.addCreditor(userEmail, creditor)
            return new ResponseDto(true, "Creditor added successfully", creditors)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add creditor", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-procurement/:userEmail')
    async addProcurement(@Param('userEmail') userEmail: string, @Body() procurement: ProcurementDto){
        try {
            const procurements = await this.userService.addProcurement(userEmail, procurement)
            return new ResponseDto(true, "Procurement added successfully", procurements)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add procurement", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('update-industry/:userEmail')
    async updateIndustry(@Param('userEmail') userEmail: string, @Query('industry') industry: IndustryName){
        try {
            const users = await this.userService.updateIndustry(userEmail, industry)
            return new ResponseDto(true, "Industry updated successfully", users)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to update industry", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-user/:userEmail')
    async addUser(@Param('userEmail') userEmail: string, @Body() user: UserManagementDto){
        try {
            const users = await this.userService.addUser(userEmail, user)
            return new ResponseDto(true, "User added successfully", users)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add user", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-payment/:userEmail')
    async addPayment(@Param('userEmail') userEmail: string, @Body() payment: PaymentDto){
        try {
            const payments = await this.userService.addPayment(userEmail, payment)
            return new ResponseDto(true, "Payment added successfully", payments)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add payment", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Post('add-customer/:userEmail')
    async addCustomer(@Param('userEmail') userEmail: string, @Body() customer: CustomerDto){
        try {
            const customers = await this.userService.addCustomer(userEmail, customer)
            return new ResponseDto(true, "Customer added successfully", customers)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to add customer", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Get('inventory/:userEmail')
    async getInventory(@Param('userEmail') userEmail: string){
        try {
            const data = await this.userService.getInventory(userEmail)
            return new ResponseDto(true, "Inventory fetched successfully", data)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to fetch inventory", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Get('thresholds/:userEmail')
    async getThresholdSettings(@Param('userEmail') userEmail: string){
        try {
            const data = await this.userService.getThresholdSettings(userEmail)
            return new ResponseDto(true, "Threshold settings fetched successfully", data)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to fetch threshold settings", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Get('measurements/:userEmail')
    async getUnitOfMesurement(@Param('userEmail') userEmail: string){
        try {
            const data = await this.userService.getUnitOfMesurement(userEmail)
            return new ResponseDto(true, "Unit of measurements fetched successfully", data)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to fetch unit of measurements", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Get('write-offs/:userEmail')
    async getWriteOffRequests(@Param('userEmail') userEmail: string){
        try {
            const data = await this.userService.getWriteOffRequests(userEmail)
            return new ResponseDto(true, "Write-off requests fetched successfully", data)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to fetch write-off requests", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Get('categories/:userEmail')
    async getCategories(@Param('userEmail') userEmail: string){
        try {
            const data = await this.userService.getCategories(userEmail)
            return new ResponseDto(true, "Categories fetched successfully", data)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to fetch categories", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    @Get('currencies/:userEmail')
    async getCurrency(@Param('userEmail') userEmail: string){
        try {
            const data = await this.userService.getCurrency(userEmail)
            return new ResponseDto(true, "Currencies fetched successfully", data)
        } catch (error) {
                throw new HttpException(
                new ErrorDto(error.message || "Failed to fetch currencies", error),
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }
}
