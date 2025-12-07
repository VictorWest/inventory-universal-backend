import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { InventoryRepository } from './repository/inventory.repository';
import { DepartmentRepository } from './repository/department.repository';
import { SupplierRepository } from './repository/supplier.repository';
import { ReceivablesRepository } from './repository/receivables.repository';
import { CreditorsRepository } from './repository/creditors.repository';
import { ProcurementRepository } from './repository/procurement.repository';
import { UserRepository } from './repository/user.repository';
import { PaymentRepository } from './repository/payment.repository';
import { CustomerRepository } from './repository/customer.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService, 
    InventoryRepository, 
    DepartmentRepository, 
    SupplierRepository,
    ReceivablesRepository,
    CreditorsRepository,
    ProcurementRepository,
    UserRepository,
    PaymentRepository,
    CustomerRepository
  ]
})
export class UserModule {}