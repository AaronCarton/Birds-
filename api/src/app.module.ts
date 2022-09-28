import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { graphqlConfig } from './bootstrap/graphQLConfig'
import { typeORMConfig } from './bootstrap/typeORMConfig'
import { BirdsModule } from './birds/birds.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
    BirdsModule,
  ], // TODO: move to async provider
  controllers: [],
  providers: [],
})
export class AppModule {}
