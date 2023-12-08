import { Req, Controller, Post, Res, Get } from '@nestjs/common'
import { addProductControllerFactory } from '../factories/products-controller-factory'
import { nestRouteAdapterFactory } from '../factories/nest-route-adapter-factory'
import { type Request as ExpressRequest, type Response } from 'express'
import { AuthClerk } from '@/infra/clerk/auth-clerk'

@Controller('/product')
export class ProductRoutes {
  @Post('')
  async addProduct (@Req() request: Request, @Res() response: Response): Promise<void> {
    const controller = addProductControllerFactory()
    const adapter = nestRouteAdapterFactory(controller)
    await adapter.adapt(request, response)
  }

  @Get('')
  async getProduct (@Req() request: ExpressRequest, @Res() response: Response): Promise<void> {
    const req = request as unknown as ExpressRequest
    const token = req.headers.token as string
    const auth = new AuthClerk()
    await auth.verifyToken(token)
    response.status(200).json({ ok: 'ok' })
  }
}
