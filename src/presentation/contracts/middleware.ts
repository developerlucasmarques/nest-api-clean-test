import type { HttpRequest, HttpResponse } from '../http/http'

export interface Middleware {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
