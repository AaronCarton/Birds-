import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { BirdsService } from './birds.service'
import { Bird } from './entities/bird.entity'
import { CreateBirdInput } from './dto/create-bird.input'
import { UpdateBirdInput } from './dto/update-bird.input'
import { DeleteResult, UpdateResult } from 'typeorm'
import { ClientMessage } from 'src/entities/ClientMessage'

@Resolver(() => Bird)
export class BirdsResolver {
  constructor(private readonly birdsService: BirdsService) {}

  @Mutation(() => Bird)
  createBird(@Args('createBirdInput') createBirdInput: CreateBirdInput) {
    return this.birdsService.create(createBirdInput)
  }

  @Query(() => [Bird], { name: 'birds' })
  findAll() {
    return this.birdsService.findAll()
  }

  @Query(() => Bird, { name: 'bird' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.birdsService.findOne(id)
  }

  @Mutation(() => Bird)
  updateBird(@Args('updateBirdInput') updateBirdInput: UpdateBirdInput): Promise<Bird> {
    return this.birdsService.update(updateBirdInput)
  }

  @Mutation(() => ClientMessage)
  async removeBird(@Args('id', { type: () => String }) id: string) {
    const deleted = await this.birdsService.remove(id)
    return deleted.affected >= 1
      ? { message: 'Bird deleted', success: true }
      : { message: 'Bird not found', success: false }
  }
}
