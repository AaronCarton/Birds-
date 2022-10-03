import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { graphqlConfig } from './bootstrap/graphQLConfig'
import { typeORMConfig } from './bootstrap/typeORMConfig'
import { BirdsModule } from './resources/birds/birds.module'
import { AreasModule } from './resources/areas/areas.module'
import { ObservationsModule } from './resources/observations/observations.module'
import { DatabaseSeedModule } from './seeds/seed.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
    BirdsModule,
    AreasModule,
    ObservationsModule,
    DatabaseSeedModule,
  ], // TODO: move to async provider
  controllers: [],
  providers: [],
})
export class AppModule {}
