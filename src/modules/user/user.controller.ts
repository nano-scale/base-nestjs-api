import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('retrieve/user/:id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }
}
