import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { BirdsResolver } from './birds.resolver'
import { BirdsService } from './birds.service'
import { CreateBirdInput } from './dto/create-bird.input'
import { Bird } from './entities/bird.entity'
import { createBird, createBirdInputStub } from './stubs/birds.stub'

describe('BirdsResolver', () => {
  let resolver: BirdsResolver
  let service: BirdsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BirdsResolver,
        BirdsService,
        {
          provide: getRepositoryToken(Bird),
          useValue: {
            create: jest.fn().mockResolvedValue(createBird()),
            save: jest.fn().mockResolvedValue(createBird()),
            findAll: jest.fn().mockResolvedValue([createBird()]),
            findOneBy: jest.fn().mockResolvedValue(createBird()),
            update: jest.fn().mockResolvedValue(createBird()),
            remove: jest.fn(),
          },
        },
      ],
    }).compile()

    resolver = module.get<BirdsResolver>(BirdsResolver)
    service = module.get<BirdsService>(BirdsService)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('createBird', () => {
    let createBirdDTO: CreateBirdInput
    let resultBird: Bird

    beforeEach(async () => {
      createBirdDTO = createBirdInputStub()
      resultBird = await resolver.createBird(createBirdDTO)
    })

    describe('when createBird is called', () => {
      it('should call the service create method', async () => {
        expect(service.create).toBeCalledTimes(1)
      })
      it('should return the created bird', async () => {
        expect(resultBird).toEqual(createBird())
      })
    })
  })
})
