import { Injectable } from '@nestjs/common';
import { CategoryDto, CurrencyDto, InventoryItemDto, ThresholdSettingDto, UnitOfMeasurementDto, WriteOffRequestDto } from '../dtos/inventory-mangement.dto';
import { InventoryRepository } from '../repository/inventory.repository';
import { DepartmentDto } from '../dtos/department-management.dto';
import { DepartmentRepository } from '../repository/department.repository';
import { SupplierRepository } from '../repository/supplier.repository';
import { SupplierDto } from '../dtos/supplier-management.dto';

@Injectable()
export class UserService {
    constructor (
        private inventoryRepository: InventoryRepository,
        private departmentRepository: DepartmentRepository,
        private supplierRepository: SupplierRepository
    ) {}

    // Inventory repositories
    async addInventory(userEmail: string, inventoryItem: InventoryItemDto){
        return this.inventoryRepository.addInventory(userEmail, inventoryItem)
    }

    async addThresholdSetting(userEmail: string, thresholdSetting: ThresholdSettingDto){
        return this.inventoryRepository.addThresholdSetting(userEmail, thresholdSetting)
    }

    async addUnitOfMesurement(userEmail: string, unitOfMesurement: UnitOfMeasurementDto){
        return this.inventoryRepository.addUnitOfMesurement(userEmail, unitOfMesurement)
    }

    async addWriteOffRequests(userEmail: string, writeOffRequest: WriteOffRequestDto){
        return this.inventoryRepository.addWriteOffRequests(userEmail, writeOffRequest)
    }

    async addCategories(userEmail: string, category: CategoryDto){
        return this.inventoryRepository.addCategories(userEmail, category)
    }

    async addCurrency(userEmail: string, currency: CurrencyDto){
        return this.inventoryRepository.addCurrency(userEmail, currency)
    }

    // Department repositories
    async addDepartment(userEmail: string, department: DepartmentDto){
        return this.departmentRepository.addDepartment(userEmail, department)
    }

    // Supplier repositories
    async addSupplier(userEmail: string, supplier: SupplierDto){
        return this.supplierRepository.addSupplier(userEmail, supplier)
    }
}