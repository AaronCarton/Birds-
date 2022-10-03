import { ObjectId } from 'mongodb'
import { CreateBirdInput } from '../dto/create-bird.input'
import { UpdateBirdInput } from '../dto/update-bird.input'
import { Bird } from '../entities/bird.entity'

export const createBirdInputStub = (): CreateBirdInput => {
  const b = new CreateBirdInput()
  b.name = 'test'
  b.fullname = 'test'
  b.category = 'test'
  b.url = 'test'
  b.observations = 2
  b.description = 'test'
  return b
}

export const updateBirdInputStub = (): UpdateBirdInput => {
  const b = new UpdateBirdInput()
  b.id = '633ad820b62ff666b42f914d'
  b.name = 'test'
  b.fullname = 'test'
  b.category = 'test'
  b.url = 'test'
  b.observations = 2
  b.description = 'test'
  return b
}

export const createBird = (): Bird => {
  const b = new Bird()
  b.id = new ObjectId('633ad820b62ff666b42f914d')
  b.name = 'test'
  b.fullname = 'test'
  b.category = 'test'
  b.url = 'test'
  b.observations = 2
  b.description = 'test'
  return b
}
