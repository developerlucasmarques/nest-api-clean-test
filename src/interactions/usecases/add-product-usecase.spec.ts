import { left, right } from '../../shared/either'
import { Product } from '../../domain/entities/product'
import { AddProductUseCase } from './add-product-usecase'
import { type AddProductRepo } from '../contracts/add-product-repo'

jest.mock('../../domain/entities/product', () => ({
  Product: {
    create: jest.fn((name: string) => right({ name }))
  }
}))

const makeAddProductRepo = (): AddProductRepo => {
  class AddProductRepoStub implements AddProductRepo {
    async add (name: string): Promise<void> {
      await Promise.resolve()
    }
  }
  return new AddProductRepoStub()
}

interface SutTypes {
  sut: AddProductUseCase
  addProductRepoStub: AddProductRepo
}

const makeSut = (): SutTypes => {
  const addProductRepoStub = makeAddProductRepo()
  const sut = new AddProductUseCase(addProductRepoStub)
  return { sut, addProductRepoStub }
}

describe('AddProduct UseCase', () => {
  it('Should call Product Entity with correct product name', async () => {
    const { sut } = makeSut()
    const createSpy = jest.spyOn(Product, 'create')
    await sut.perform('any_product_name')
    expect(createSpy).toHaveBeenCalledWith('any_product_name')
  })

  it('Should return an Error if create Product Entity fails', async () => {
    const { sut } = makeSut()
    jest
      .spyOn(Product, 'create')
      .mockReturnValueOnce(left(new Error('any message')))
    const result = await sut.perform('any_product_name')
    expect(result.value).toEqual(new Error('any message'))
  })

  it('Should call AddProductRepo with correct value', async () => {
    const { sut, addProductRepoStub } = makeSut()
    const addSpy = jest.spyOn(addProductRepoStub, 'add')
    await sut.perform('any_product_name')
    expect(addSpy).toHaveBeenCalledWith('any_product_name')
  })
})
