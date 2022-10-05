import { AuthUserDto } from './dto/auth-user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, HttpCode , Post } from '@nestjs/common';

@Controller('users')
export class UserController {

    constructor(
        private service: UserService
    ) { }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() authUserDto: AuthUserDto) {
        return await this.service.login(authUserDto);
    }

    @Get('statistics')
    statistics() {
        return this.service.statistics();
    }

}
