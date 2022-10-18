import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Observation } from './entities/observation.entity'
import { Bird } from 'src/resources/birds/entities/bird.entity'
import { User } from 'src/resources/users/entities/user.entity'
import { Location } from 'src/resources/locations/entities/location.entity'
import { ObservationsService } from './observations.service'
import { ObservationsResolver } from './observations.resolver'
import { LocationsService } from 'src/resources/locations/locations.service'
import { BirdsService } from 'src/resources/birds/birds.service'
import { UsersService } from 'src/resources/users/users.service'
import { NotificationsModule } from 'src/resources/notifications/notifications.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Bird, Location, Observation, User]),
    NotificationsModule,
  ],
  providers: [
    UsersService,
    BirdsService,
    LocationsService,
    ObservationsResolver,
    ObservationsService,
  ],
})
export class ObservationsModule {}
