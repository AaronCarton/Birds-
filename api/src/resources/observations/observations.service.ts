import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ObjectId } from 'mongodb'
import { Repository } from 'typeorm'

import { CreateObservationInput } from './dto/create-observation.input'
import { UpdateObservationInput } from './dto/update-observation.input'
import { Observation } from './entities/observation.entity'

@Injectable()
export class ObservationsService {
  constructor(
    @InjectRepository(Observation)
    private readonly observationRepository: Repository<Observation>,
  ) {}

  create(createObservationInput: CreateObservationInput): Promise<Observation> {
    return this.observationRepository.save(createObservationInput)
  }

  findAll(): Promise<Observation[]> {
    return this.observationRepository.find()
  }

  findOne(id: string): Promise<Observation> {
    return this.observationRepository.findOne(new ObjectId(id))
  }

  async update(updateObservationInput: UpdateObservationInput) {
    await this.observationRepository.update(
      updateObservationInput.id,
      updateObservationInput,
    )
    return this.observationRepository.findOne(new ObjectId(updateObservationInput.id))
  }

  remove(id: string) {
    return this.observationRepository.delete(new ObjectId(id))
  }
}
