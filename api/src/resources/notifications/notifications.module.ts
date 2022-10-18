import { Module } from '@nestjs/common'
import { LivelocationsService } from 'src/resources/livelocations/livelocations.service'
import { LocationsService } from 'src/resources/locations/locations.service'
import { NotificationsGateway } from './notifications.gateway'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Livelocation } from 'src/resources/livelocations/entities/livelocation.entity'
import { Location } from '../locations/entities/location.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Livelocation, Location])],
  providers: [NotificationsGateway, LivelocationsService, LocationsService],
  exports: [NotificationsGateway],
})
export class NotificationsModule {}
