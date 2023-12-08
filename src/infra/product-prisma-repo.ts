import { type PrismaClient } from '@prisma/client'
import { type AddProductRepo } from '@/interactions/contracts/add-product-repo'

export class ProductPrismaRepo implements AddProductRepo {
  constructor (private readonly prisma: PrismaClient) {}

  async add (name: string): Promise<void> {
    await this.prisma.product.create({ data: { name } })
  }
}
