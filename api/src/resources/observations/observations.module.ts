import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ObservationsService } from './observations.service'
import { ObservationsResolver } from './observations.resolver'
import { Bird } from '../birds/entities/bird.entity'
import { BirdsService } from '../birds/birds.service'
import { Location } from '../locations/entities/location.entity'
import { Observation } from './entities/observation.entity'
import { LocationsService } from '../locations/locations.service'

@Module({
  imports: [TypeOrmModule.forFeature([Bird, Location, Observation])],
  providers: [BirdsService, LocationsService, ObservationsResolver, ObservationsService],
})
export class ObservationsModule {}
