import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Bird } from '../resources/birds/entities/bird.entity'
import { DatabaseSeedService } from './seed.service'
import { DatabaseSeedCommand } from './seed.command'
import { CommandModule } from 'nestjs-command'
import { Location } from 'src/resources/locations/entities/location.entity'
import { Observation } from 'src/resources/observations/entities/observation.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Bird, Location, Observation]), CommandModule],
  providers: [DatabaseSeedCommand, DatabaseSeedService],
})
export class DatabaseSeedModule {}
