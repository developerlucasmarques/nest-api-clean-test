import { type Either } from '../../shared/either'
import { type InvalidProductError } from '../entities/product'

export type AddProductRes = Either<InvalidProductError, null>

export interface AddProduct {
  perform: (name: string) => Promise<AddProductRes>
}
