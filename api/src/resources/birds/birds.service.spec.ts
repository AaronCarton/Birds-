import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BirdsService } from './birds.service'
import { Bird } from './entities/bird.entity'
import { createBird, createBirdInputStub, updateBirdInputStub } from './stubs/birds.stub'

describe('BirdsService', () => {
  let service: BirdsService
  let mockBirdsRepository: Repository<Bird>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BirdsService,
        {
          provide: getRepositoryToken(Bird),
          useValue: {
            save: jest.fn().mockResolvedValue(createBird()),
            find: jest.fn().mockResolvedValue([createBird()]),
            findOneBy: jest.fn().mockResolvedValue(createBird()),
            update: jest.fn().mockResolvedValue(createBird()),
          },
        },
      ],
    }).compile()

    service = module.get<BirdsService>(BirdsService)
    mockBirdsRepository = module.get<Repository<Bird>>(getRepositoryToken(Bird))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    describe('when create is called', () => {
      it('should call birdRepository.save', async () => {
        const saveSpy = jest.spyOn(mockBirdsRepository, 'create')
        const newBird = new Bird()
        await service.create(newBird)

        expect(saveSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const saveSpy = jest.spyOn(mockBirdsRepository, 'create')
        // const newBird = new Bird()
        const newBird = createBirdInputStub()
        await service.create(newBird)

        expect(saveSpy).toBeCalledWith(newBird)
      })

      it('should return the created bird', async () => {
        const newBird = createBirdInputStub()
        const result = await service.create(newBird)
        const toReturnBird = createBird()

        expect(result).toEqual(toReturnBird)
      })
    })
  })

  describe('findAll', () => {
    describe('when findAll is called', () => {
      it('should call birdRepository.find', async () => {
        const findSpy = jest.spyOn(mockBirdsRepository, 'find')
        await service.findAll()

        expect(findSpy).toBeCalledTimes(1)
      })

      it('should return the created bird', async () => {
        const toReturnBird = createBird()
        const result = await service.findAll()

        expect(result).toEqual([toReturnBird])
      })
    })
  })

  describe('findOne', () => {
    describe('when findOne is called', () => {
      it('should call birdRepository.findOneBy', async () => {
        const findSpy = jest.spyOn(mockBirdsRepository, 'findOneBy')
        await service.findOne('633ad820b62ff666b42f914d')

        expect(findSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const findSpy = jest.spyOn(mockBirdsRepository, 'findOneBy')
        await service.findOne('633ad820b62ff666b42f914d')

        expect(findSpy).toBeCalledWith({ id: '633ad820b62ff666b42f914d' })
      })

      it('should return the created bird', async () => {
        const toReturnBird = createBird()
        const result = await service.findOne('633ad820b62ff666b42f914d')

        expect(result).toEqual(toReturnBird)
      })
    })
  })

  describe('update', () => {
    describe('when update is called', () => {
      it('should call birdRepository.update', async () => {
        const saveSpy = jest.spyOn(mockBirdsRepository, 'update')
        const newBird = updateBirdInputStub()
        await service.update(newBird)

        expect(saveSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const saveSpy = jest.spyOn(mockBirdsRepository, 'update')
        const newUpdatedBird = updateBirdInputStub()
        await service.update(newUpdatedBird)

        expect(saveSpy).toBeCalledWith(createBird())
      })

      it('should return the created bird', async () => {
        const newUpdatedBird = updateBirdInputStub()
        const result = await service.update(newUpdatedBird)
        const toReturnBird = createBird()

        expect(result).toEqual(toReturnBird)
      })
    })
  })
})
