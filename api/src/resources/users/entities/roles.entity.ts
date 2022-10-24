import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'

export enum RoleType {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
registerEnumType(RoleType, { name: 'RoleType' })

@InputType('RoleInput')
@ObjectType()
export class Role {
  @Field(() => RoleType)
  name: RoleType

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  createdAt?: Date
}
