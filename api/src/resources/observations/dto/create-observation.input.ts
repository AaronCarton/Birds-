import { InputType, Field } from '@nestjs/graphql'
import { Point } from 'geojson'
import { GeoPoint } from '../entities/geopoint.entity'

@InputType()
export class CreateObservationInput {
  @Field()
  name: string

  @Field()
  userId: string

  @Field(() => GeoPoint)
  geopoint: Point

  @Field({ nullable: true })
  weather?: string

  @Field()
  birdId: string

  @Field()
  locationId: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  active?: boolean
}
