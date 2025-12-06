import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { InventoryRepository } from './repository/inventory.repository';
import { DepartmentRepository } from './repository/department.repository';
import { SupplierRepository } from './repository/supplier.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, InventoryRepository, DepartmentRepository, SupplierRepository]
})
export class UserModule {}