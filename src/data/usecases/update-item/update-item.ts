import { Item } from '@/domain/entities/item/item'
import { ItemRepository } from '@/domain/entities/item/item-repository'
import { UpdateItem as UpdateItemInterface, UpdateItemInput, UpdateItemOutput } from '@/domain/usecases/update-item'

export class UpdateItem implements UpdateItemInterface {

    constructor(
        private readonly itemRepository: ItemRepository
    ) {}

    async update(id: string, params: UpdateItemInput): Promise<UpdateItemOutput> {
        const itemProps = await this.itemRepository.findById(id)
        const item: Item = new Item(itemProps.name, itemProps.value, itemProps.checked)

        if (params.name === undefined || params.name === item.getName()) {
            throw new Error('Param name not changed')
        }

        if (params.value === undefined || params.value === item.getValue()) {
            throw new Error('Param value not changed')
        }

        item.setName(params.name)
        item.setValue(params.value)

        await this.itemRepository.update(id, params)

        return {
            id
        }
    }
}