import { Body, Controller, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { InventoryItemDto, ThresholdSettingDto, UnitOfMeasurementDto, WriteOffRequestDto, CategoryDto, CurrencyDto } from '../dtos/inventory-mangement.dto';
import { ResponseDto } from 'src/dtos/response.dto';
import { ErrorDto } from 'src/dtos/error.dto';
import { DepartmentDto } from '../dtos/department-management.dto';

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
}
