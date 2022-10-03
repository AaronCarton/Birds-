import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateAreaInput {
  @Field()
  name: string

  // @Field(() => Observation)
  // observations: Observation[]
  @Field()
  observationsId: string

  @Field()
  location: string
}
