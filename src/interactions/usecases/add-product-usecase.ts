import { type AddProduct, type AddProductRes } from '../../domain/contracts/add-product'
import { Product } from '../../domain/entities/product'
import { left, right } from '../../shared/either'
import { type AddProductRepo } from '../contracts/add-product-repo'

export class AddProductUseCase implements AddProduct {
  constructor (private readonly addProductRepo: AddProductRepo) {}

  async perform (name: string): Promise<AddProductRes> {
    const productResult = Product.create(name)
    if (productResult.isLeft()) {
      return left(productResult.value)
    }
    await this.addProductRepo.add(name)
    return right(null)
  }
}
