import { Bird } from '../../birds/entities/bird.entity'
import { DataSource } from 'typeorm'

export const birdProviders = [
  {
    provide: 'BIRD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Bird),
    inject: ['DATA_SOURCE'],
  },
]
