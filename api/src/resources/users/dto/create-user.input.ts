import { InputType, Field, Int } from '@nestjs/graphql'
import { CreateObservationInput } from 'src/resources/observations/dto/create-observation.input'
import { Observation } from 'src/resources/observations/entities/observation.entity'
import { Role } from '../entities/roles.entity'

@InputType()
export class CreateUserInput {
  @Field()
  uid: string

  @Field(() => Role)
  role: Role

  @Field(() => [CreateObservationInput], {
    nullable: 'itemsAndList', // Can return []
    defaultValue: [],
  })
  observations?: Observation[]

  @Field(() => Int, { defaultValue: 0 })
  observationsCount?: number
}
