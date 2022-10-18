import { CreateUserInput } from './create-user.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import { Observation } from 'src/resources/observations/entities/observation.entity'
import { CreateObservationInput } from 'src/resources/observations/dto/create-observation.input'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string

  @Field(() => [CreateObservationInput], { nullable: 'itemsAndList' }) // Can return []
  observations: Observation[]

  @Field(() => Int)
  observationsCount: number
}
