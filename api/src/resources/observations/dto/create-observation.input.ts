import { InputType, Field } from '@nestjs/graphql'
import { Bird } from 'src/resources/birds/entities/bird.entity'
import { Area } from 'src/resources/areas/entities/Area.entity'

@InputType()
export class CreateObservationInput {
  @Field()
  name: string

  @Field({ nullable: true })
  userId?: string

  @Field({ nullable: true })
  weather?: string

  // @Field(() => Bird)
  // bird: Bird

  @Field()
  birdId: string

  // @Field(() => Location)
  // location: Location

  @Field()
  locationId: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  active?: boolean
}
