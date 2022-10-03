import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'
import { CreateAreaInput } from './dto/create-area.input'
import { UpdateAreaInput } from './dto/update-area.input'
import { Area } from './entities/area.entity'

@Injectable()
export class AreasService {
  constructor(@InjectRepository(Area) private readonly areaRepo: Repository<Area>) {}

  create(createAreaInput: CreateAreaInput): Promise<Area> {
    return this.areaRepo.save(createAreaInput)
  }

  findAll(): Promise<Area[]> {
    return this.areaRepo.find()
  }

  findOne(id: String): Promise<Area> {
    return this.areaRepo.findOneBy({ id: id })
  }

  async update(updateInput: UpdateAreaInput): Promise<Area> {
    this.areaRepo.update(updateInput.id, updateInput)
    return this.areaRepo.findOneBy({ id: updateInput.id })
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.areaRepo.delete(id)
  }
}
