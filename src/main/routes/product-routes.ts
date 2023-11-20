import { Req, Controller, Post, Res } from '@nestjs/common'
import { addProductControllerFactory } from '../factories/products-controller-factory'
import { nestRouteAdapterFactory } from '../factories/nest-route-adapter-factory'
import { type Response } from 'express'

@Controller('/product')
export class ProductRoutes {
  @Post('')
  async addProduct (@Req() request: Request, @Res() response: Response): Promise<void> {
    const controller = addProductControllerFactory()
    const adapter = nestRouteAdapterFactory(controller)
    await adapter.adapt(request, response)
  }
}
