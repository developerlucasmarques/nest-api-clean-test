import { type Either } from '../../shared/either'
import { type InvalidProductError } from '../entities/product'

export type AddProductRes = Either<InvalidProductError, null>

export abstract class AddProduct {
  abstract perform (name: string): Promise<AddProductRes>
}
