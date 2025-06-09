import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateUserDto } from "@selltrat/shared";

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
