import { InputType, Field } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { Point } from 'geojson'
import { GeoPoint } from 'src/resources/locations/entities/geopoint.entity'

@InputType()
export class CreateLivelocationInput {
  @IsString() //validation
  @IsNotEmpty() //validation
  @Field(() => String, { description: 'User id' })
  idUser: string

  @IsNotEmpty() //validation
  @ValidateNested() //validation
  @Type(() => GeoPoint) //class-transfomer
  @Field(() => GeoPoint, { description: 'Geolocation' })
  geolocation: Point
}
