import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { Entity, ObjectIdColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Child {
  @Field(() => ID) // GraphQL
  @ObjectIdColumn({ name: '_id' }) //typeORM // Map this field to the (generated) _id column in the database
  id: ObjectId

  @Field(() => Int, { description: 'Example field (placeholder)' })
  price: number
}
