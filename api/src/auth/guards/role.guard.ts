import { CanActivate, ExecutionContext, Injectable, mixin } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { UsersService } from 'src/resources/users/users.service'

export const RolesGuard = (roles: string[]) => {
  @Injectable()
  class RolesGuardMixin implements CanActivate {
    constructor(readonly userService: UsersService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
      const ctx = GqlExecutionContext.create(context)
      const user = ctx.getContext().req.user

      const customUser = await this.userService.findOneBy(user.uid)

      return roles.includes(customUser.role.name)
    }
  }

  const guard = mixin(RolesGuardMixin)
  return guard
}
