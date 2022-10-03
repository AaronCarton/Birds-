import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Observation } from './entities/observation.entity'
import { ObservationsService } from './observations.service'

describe('ObservationsService', () => {
  let service: ObservationsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObservationsService,
        { provide: getRepositoryToken(Observation), useValue: {} },
      ],
    }).compile()

    service = module.get<ObservationsService>(ObservationsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
