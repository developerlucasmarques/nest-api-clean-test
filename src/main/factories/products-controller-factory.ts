import { PrismaClient } from '@prisma/client'
import { AddProductUseCase } from '../../interactions/usecases/add-product-usecase'
import { ProductPrismaRepo } from '../../infra/product-prisma-repo'
import { type Controller } from '../../presentation/contracts/controller'
import { AddProductController } from '../../presentation/controllers/add-product-controller'

export const addProductControllerFactory = (): Controller => {
  const prisma = new PrismaClient()
  const primsa = new ProductPrismaRepo(prisma)
  const addProductUseCase = new AddProductUseCase(primsa)
  return new AddProductController(addProductUseCase)
}
