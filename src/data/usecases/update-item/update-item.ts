import { ItemRepository } from '@/domain/entities/item/item-repository'
import { UpdateItem as UpdateItemInterface, UpdateItemInput, UpdateItemOutput } from '@/domain/usecases/update-item'

export class UpdateItem implements UpdateItemInterface {

    constructor(
        private readonly itemRepository: ItemRepository
    ) {}

    async update(id: number, params: UpdateItemInput): Promise<UpdateItemOutput> {
        await this.itemRepository.update(id, params)
        return {
            id
        }
    }
}