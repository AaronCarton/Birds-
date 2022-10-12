import { CreateUserInput } from './create-user.input'
import { InputType, Field, PartialType, Int } from '@nestjs/graphql'
import { Observation } from 'src/resources/observations/entities/observation.entity'
import { CreateObservationInput } from 'src/resources/observations/dto/create-observation.input'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string

  @Field()
  uid: string

  @Field(() => [CreateObservationInput], { nullable: 'itemsAndList' })
  observations: Observation[]

  @Field(() => Int)
  observationCount: number
}
