import { type Either, left, right } from '../../shared/either'

export class InvalidProductError extends Error {
  constructor (name: string) {
    super(`Product wiht name ${name} invalid`)
    this.name = 'InvalidProductError'
  }
}

export type ProductRes = Either<InvalidProductError, Product>

export class Product {
  private constructor (name: string) {}

  static create (name: string): ProductRes {
    if (!Product.validate(name)) {
      return left(new InvalidProductError(name))
    }
    return right(new Product(name))
  }

  private static validate (name: string): boolean {
    if (name.length < 2) {
      return false
    }
    return true
  }
}
