import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { Observation } from 'src/resources/observations/entities/observation.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
@ObjectType()
export class Area {
  @Field(() => ID)
  @ObjectIdColumn() //typeORM // Map this field to the (generated) _id column in the database
  id: ObjectId

  @Field() // GraphQL
  @Column() //typeORM
  name: string

  @Field(() => [Observation])
  @Column({ nullable: true })
  observations: Observation[]

  @Field()
  @Column()
  location: string

  @Field({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date
}
