import { type AddProduct } from 'src/domain/contracts/add-product'
import { type Controller } from '../contracts'
import { type HttpRequest, type HttpResponse } from '../http/http'
import { badRequest, noContent } from '../http/http-helpers'

export class AddProductController implements Controller {
  constructor (private readonly addProduct: AddProduct) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const addProductResult = await this.addProduct.perform(httpRequest.body?.name)
    if (addProductResult.isLeft()) {
      return badRequest(addProductResult.value)
    }
    return noContent()
  }
}
