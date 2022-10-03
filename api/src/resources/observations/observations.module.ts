import { Module } from '@nestjs/common'
import { ObservationsService } from './observations.service'
import { ObservationsResolver } from './observations.resolver'
import { Observation } from './entities/observation.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Bird } from '../birds/entities/bird.entity'
import { BirdsService } from '../birds/birds.service'
import { AreasService } from '../areas/areas.service'
import { Area } from '../areas/entities/area.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Observation, Bird, Area])],
  providers: [ObservationsResolver, ObservationsService, BirdsService, AreasService],
})
export class ObservationsModule {}
