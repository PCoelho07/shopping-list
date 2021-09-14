import { Item } from '@/domain/entities/item/item';
import { ItemRepository, ItemRepositoryOutput } from '@/domain/entities/item/item-repository';
import { CheckUpItem as CheckUpItemInterface } from '@/domain/usecases/check-up-item'

export class CheckUpItem implements CheckUpItemInterface {

    constructor(
        private readonly itemRepository: ItemRepository
    ) {

    }

    async check(itemId: string): Promise<boolean> {
        const itemData: ItemRepositoryOutput = await this.itemRepository.findById(itemId)
        const item: Item = new Item(itemData.name, itemData.value, !itemData.checked, itemData.id)
        await this.itemRepository.check(item.getId(), item.hasChecked())

        return item.hasChecked()
    }
}