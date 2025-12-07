import { Injectable } from '@nestjs/common';
import { CategoryDto, CurrencyDto, InventoryItemDto, ThresholdSettingDto, UnitOfMeasurementDto, WriteOffRequestDto } from '../dtos/inventory-mangement.dto';
import { InventoryRepository } from '../repository/inventory.repository';
import { DepartmentDto } from '../dtos/department-management.dto';
import { DepartmentRepository } from '../repository/department.repository';
import { SupplierRepository } from '../repository/supplier.repository';
import { SupplierDto } from '../dtos/supplier-management.dto';
import { ReceivablesRepository } from '../repository/receivables.repository';
import { ReceivablesDto } from '../dtos/receivables-management.dto';
import { CreditorsRepository } from '../repository/creditors.repository';
import { CreditorsDto } from '../dtos/creditors-management.dto';
import { ProcurementDto } from '../dtos/procurement-management.dto';
import { ProcurementRepository } from '../repository/procurement.repository';
import { UserRepository } from '../repository/user.repository';
import { UserManagementDto } from '../dtos/user-management.dto';
import { PaymentRepository } from '../repository/payment.repository';
import { PaymentDto } from '../dtos/payment.dto';
import { CustomerRepository } from '../repository/customer.repository';
import { CustomerDto } from '../dtos/customer.dto';
import { IndustryName } from 'src/interface/industry';

@Injectable()
export class UserService {
    constructor (
        private inventoryRepository: InventoryRepository,
        private departmentRepository: DepartmentRepository,
        private supplierRepository: SupplierRepository,
        private reveivablesRepository: ReceivablesRepository,
        private creditorsRepository: CreditorsRepository,
        private procurementRepository: ProcurementRepository,
        private userRepository: UserRepository,
        private paymentRepository: PaymentRepository,
        private customerRepository: CustomerRepository
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

    async getInventory(userEmail: string){
        return this.inventoryRepository.getInventory(userEmail)
    }

    async getThresholdSettings(userEmail: string){
        return this.inventoryRepository.getThresholdSettings(userEmail)
    }

    async getUnitOfMesurement(userEmail: string){
        return this.inventoryRepository.getUnitOfMesurement(userEmail)
    }

    async getWriteOffRequests(userEmail: string){
        return this.inventoryRepository.getWriteOffRequests(userEmail)
    }

    async getCategories(userEmail: string){
        return this.inventoryRepository.getCategories(userEmail)
    }

    async getCurrency(userEmail: string){
        return this.inventoryRepository.getCurrency(userEmail)
    }

    // Department repositories
    async addDepartment(userEmail: string, department: DepartmentDto){
        return this.departmentRepository.addDepartment(userEmail, department)
    }

    // Supplier repositories
    async addSupplier(userEmail: string, supplier: SupplierDto){
        return this.supplierRepository.addSupplier(userEmail, supplier)
    }

    // Receivables repositories
    async addReceivable(userEmail: string, receivable: ReceivablesDto){
        return this.reveivablesRepository.addReceivable(userEmail, receivable)
    }

    // Creditors repositories
    async addCreditor(userEmail: string, creditor: CreditorsDto){
        return this.creditorsRepository.addCreditor(userEmail, creditor)
    }

    // Procurement repositories
    async addProcurement(userEmail: string, procurement: ProcurementDto){
        return this.procurementRepository.addProcurement(userEmail, procurement)
    }

    // User repositories
    async updateIndustry(userEmail: string, industry: IndustryName){
        return this.userRepository.updateIndustry(userEmail, industry)
    }

    async addUser(userEmail: string, user: UserManagementDto){
        return this.userRepository.addUser(userEmail, user)
    }

    // Payment repositories
    async addPayment(userEmail: string, payment: PaymentDto){
        return this.paymentRepository.addPayment(userEmail, payment)
    }

    // Customer repositories
    async addCustomer(userEmail: string, customer: CustomerDto){
        return this.customerRepository.addCustomer(userEmail, customer)
    }
}