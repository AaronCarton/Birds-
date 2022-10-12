import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'
import { Bird } from '../../birds/entities/bird.entity'
import { Location } from '../../locations/entities/location.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Point } from 'geojson'
import { GeoPoint } from './geopoint.entity'

@Entity()
@ObjectType({ description: 'observations' })
export class Observation {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  userId: string

  @Field(() => GeoPoint)
  @Column({ nullable: true, type: 'simple-json' })
  geopoint: Point

  @Field({ nullable: true })
  @Column({ nullable: true })
  weather?: string

  @Field(() => Bird)
  bird: Bird

  @Column()
  birdId: string

  @Field(() => Location)
  location: Location

  @Column()
  locationId: string

  @Field({ nullable: true })
  @Column()
  description?: string

  @Field({ nullable: true })
  @Column()
  active?: boolean

  @Field({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date
}
