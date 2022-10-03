import { Module } from '@nestjs/common'
import { ObservationsService } from './observations.service'
import { ObservationsResolver } from './observations.resolver'
import { BirdsModule } from 'src/resources/birds/birds.module'
import { Observation } from './entities/observation.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Bird } from 'src/resources/birds/entities/bird.entity'
import { BirdsService } from 'src/resources/birds/birds.service'
import { AreasService } from 'src/resources/areas/areas.service'
import { AreasModule } from 'src/resources/areas/areas.module'
import { Area } from 'src/resources/areas/entities/area.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Observation, Bird, Area])],
  providers: [ObservationsResolver, ObservationsService, BirdsService, AreasService],
})
export class ObservationsModule {}
