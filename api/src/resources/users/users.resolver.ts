import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { ClientMessage, MessageTypes } from 'src/bootstrap/entities/ClientMessage'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll()
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id)
  }

  @Query(() => User, { name: 'findUserByUid' })
  async findUserByUid(@Args('uid', { type: () => String }) uid: string) {
    return this.usersService.findOneByUid(uid)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput)
  }

  @Mutation(() => ClientMessage)
  async removeUser(@Args('id', { type: () => String }) id: string) {
    return new Promise((resolve) =>
      this.usersService
        .remove(id)
        .then(() => {
          resolve({
            statusCode: 200,
            message: `User ${id} deleted`,
            type: MessageTypes.success,
          })
        })
        .catch(() => {
          resolve({
            statusCode: 400,
            message: `User ${id} not deleted`,
            type: MessageTypes.error,
          })
        }),
    )
  }
}
