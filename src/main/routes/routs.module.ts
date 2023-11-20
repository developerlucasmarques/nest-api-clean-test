import { Module } from '@nestjs/common'
import { ProductRoutes } from './product-routes'

@Module({
  controllers: [ProductRoutes],
  providers: []
})
export class RoutesModule {}
