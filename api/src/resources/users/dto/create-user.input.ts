import { InputType, Field } from '@nestjs/graphql'
import { CreateObservationInput } from 'src/resources/observations/dto/create-observation.input'
import { Observation } from 'src/resources/observations/entities/observation.entity'

@InputType()
export class CreateUserInput {
  @Field()
  uid: string

  @Field(() => [CreateObservationInput], { nullable: 'itemsAndList', defaultValue: [] })
  observations: Observation[]

  @Field({ nullable: true, defaultValue: 0 })
  observationCount: number
}
