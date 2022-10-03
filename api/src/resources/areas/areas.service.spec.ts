import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { AreasService } from './areas.service'
import { Area } from './entities/area.entity'

describe('AreasService', () => {
  let service: AreasService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreasService, { provide: getRepositoryToken(Area), useValue: {} }],
    }).compile()

    service = module.get<AreasService>(AreasService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
