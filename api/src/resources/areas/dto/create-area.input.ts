import { InputType, Field } from '@nestjs/graphql'
import { Observation } from 'src/resources/observations/entities/observation.entity'

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
