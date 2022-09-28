import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, ObjectID, Repository, UpdateResult } from 'typeorm'
import { CreateBirdInput } from './dto/create-bird.input'
import { UpdateBirdInput } from './dto/update-bird.input'
import { Bird } from './entities/bird.entity'

@Injectable()
export class BirdsService {
  constructor(@InjectRepository(Bird) private readonly birdsRepo: Repository<Bird>) {}

  create(createBirdInput: CreateBirdInput): Promise<Bird> {
    return this.birdsRepo.save(createBirdInput)
    // return 'This action adds a new bird'
  }

  findAll(): Promise<Bird[]> {
    return this.birdsRepo.find()
    // return `This action returns all birds`
  }

  findOne(id: String): Promise<Bird> {
    return this.birdsRepo.findOneBy({ id: id })
    // return `This action returns a #${id} bird`
  }

  async update(updateBirdInput: UpdateBirdInput): Promise<Bird> {
    this.birdsRepo.update(updateBirdInput.id, updateBirdInput)
    return this.birdsRepo.findOneBy({ id: updateBirdInput.id })
  }

  async remove(id: string): Promise<DeleteResult> {
    console.log('id', id)

    const result = this.birdsRepo.delete(id)
    console.log(await result)
    return result
    // return `This action removes a #${id} bird`
  }
}
