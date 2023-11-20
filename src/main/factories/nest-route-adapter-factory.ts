import { type Controller } from '../../presentation/contracts'
import { NestRouteAdapter } from '../adapters/nest-route-adapter'

export const nestRouteAdapterFactory = (controller: Controller) => {
  return new NestRouteAdapter(controller)
}
