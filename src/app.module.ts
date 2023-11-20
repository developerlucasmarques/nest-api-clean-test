import { Module } from '@nestjs/common'
import { RoutesModule } from './main/routes/routs.module'

@Module({
  imports: [RoutesModule]
})
export class AppModule {}
