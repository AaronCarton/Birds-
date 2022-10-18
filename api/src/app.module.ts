import { Module } from '@nestjs/common'

import { BirdsModule } from './resources/birds/birds.module'
import { ObservationsModule } from './resources/observations/observations.module'
import { LocationsModule } from './resources/locations/locations.module'
import { BootstrapModule } from './bootstrap/bootstrap.module'
import { DatabaseSeedModule } from './seed/seed.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './resources/users/users.module'
import { LivelocationsModule } from './resources/livelocations/livelocations.module'
import { NotificationsModule } from './resources/notifications/notifications.module'

@Module({
  imports: [
    BootstrapModule,
    AuthModule,

    BirdsModule,
    ObservationsModule,
    LocationsModule,
    UsersModule,
    LivelocationsModule,

    DatabaseSeedModule,

    NotificationsModule,
  ],

  exports: [],

  providers: [],
})
export class AppModule {}
