import type { Middleware } from '../contracts/middleware'
import type { HttpRequest, HttpResponse } from '../http/http'
import { noContent, serverError, unauthorized } from '../http/http-helpers'

export class AccessControlMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (!accessToken) {
        return unauthorized(new Error('Token not informed'))
      }
      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
