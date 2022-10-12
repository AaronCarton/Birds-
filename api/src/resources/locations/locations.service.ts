import { Injectable } from '@nestjs/common'
import { CreateLocationInput } from './dto/create-location.input'
import { UpdateLocationInput } from './dto/update-location.input'
import { Location } from './entities/location.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'
import { ObjectId } from 'mongodb'

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  create(createLocationInput: CreateLocationInput): Promise<Location> {
    return this.locationRepository.save(createLocationInput)
  }

  findAll(): Promise<Location[]> {
    return this.locationRepository.find()
  }

  findOne(id: string): Promise<Location> {
    return this.locationRepository.findOne(new ObjectId(id))
  }

  async update(updateLocationInput: UpdateLocationInput) {
    await this.locationRepository.update(updateLocationInput.id, updateLocationInput)
    return this.locationRepository.findOne(new ObjectId(updateLocationInput.id))
  }

  remove(id: string): Promise<DeleteResult> {
    return this.locationRepository.delete(new ObjectId(id))
  }
}
