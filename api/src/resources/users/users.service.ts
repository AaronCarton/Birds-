import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { ObjectId } from 'mongodb'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    return this.userRepo.save(createUserInput)
  }

  findAll() {
    return this.userRepo.find()
  }

  findOne(id: string) {
    return this.userRepo.findOne(new ObjectId(id))
  }

  findOneByUid(uid: string) {
    return this.userRepo.findOneBy({ uid: uid })
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    await this.userRepo.update(id, updateUserInput)
    return this.userRepo.findOne(new ObjectId(id))
  }

  remove(id: string) {
    return this.userRepo.delete(new ObjectId(id))
  }
}
