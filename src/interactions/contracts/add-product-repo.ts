export abstract class AddProductRepo {
  abstract add: (name: string) => Promise<void>
}
