import { Module } from '@nestjs/common'
import { LocationsService } from './locations.service'
import { LocationsResolver } from './locations.resolver'
import { Location } from './entities/location.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ObservationsService } from 'src/resources/observations/observations.service'
import { Observation } from 'src/resources/observations/entities/observation.entity'
import { BirdsService } from 'src/resources/birds/birds.service'
import { Bird } from 'src/resources/birds/entities/bird.entity'
import { UsersService } from 'src/resources/users/users.service'
import { User } from 'src/resources/users/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Location, Observation, Bird, User])],
  providers: [
    BirdsService,
    ObservationsService,
    UsersService,
    LocationsResolver,
    LocationsService,
  ],
})
export class LocationsModule {}
