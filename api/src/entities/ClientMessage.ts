import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ClientMessage {
  @Field()
  success: boolean

  @Field()
  message: string
}
