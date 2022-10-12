import { Command } from 'nestjs-command'
import { Injectable } from '@nestjs/common'
import { DatabaseSeedService } from './seed.service'

@Injectable()
export class DatabaseSeedCommand {
  constructor(private readonly seedService: DatabaseSeedService) {}

  @Command({
    command: 'seed:birds',
    describe: 'seed the database with birds',
  })
  async seed() {
    console.log('🌱 Start seeding')
    const r = await this.seedService.addAllBirds()
    console.log(r)
    console.log('🌱 Seeding done 🏁')
  }

  @Command({
    command: 'seed:locations',
    describe: 'seed the locations',
  })
  async seedLocations() {
    console.log('🌱 Start seeding')
    const l = await this.seedService.addAllLocations()
    console.log(l)
    console.log('🌱 Seeding done 🏁')
  }

  @Command({
    command: 'seed:observations',
    describe: 'seed the observations',
  })
  async seedObservations() {
    console.log('🌱 Start seeding')
    const o = await this.seedService.addAllObservations()
    console.log(o)
    console.log('🌱 Seeding done 🏁')
  }

  @Command({
    command: 'seed:reset',
    describe: 'delete all data from the database',
  })
  async delete() {
    console.log('🌱 Start deleting')
    await this.seedService.deleteAllBirds()
    await this.seedService.deleteAllLocations()
    await this.seedService.deleteAllObservations()
    console.log('🌱 Deleting done 🏁')
  }
}
