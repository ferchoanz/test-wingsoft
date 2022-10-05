import { DatabaseModule } from './../database/database.module';
import { userProviders } from './user.provider';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ]
})
export class UserModule {}
