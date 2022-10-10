import { Module } from '@nestjs/common'

import { BirdsModule } from './resources/birds/birds.module'
import { ObservationsModule } from './resources/observations/observations.module'
import { LocationsModule } from './resources/locations/locations.module'
import { BootstrapModule } from './bootstrap/bootstrap.module'
import { DatabaseSeedModule } from './seed/seed.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BootstrapModule,
    BirdsModule,
    ObservationsModule,
    LocationsModule,
    DatabaseSeedModule,
    AuthModule,
  ],

  exports: [],
})
export class AppModule {}
