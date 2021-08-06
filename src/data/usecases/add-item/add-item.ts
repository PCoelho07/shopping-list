import { Item } from "@/domain/entities/Item";
import { ItemRepository } from "@/domain/entities/Item/ItemRepository";
import { AddItem as AddItemInterface, AddItemInput, AddItemOutput } from "@/domain/usecases/add-item";

export class AddItem implements AddItemInterface {
    constructor(private readonly itemRepository: ItemRepository) {
        this.itemRepository = itemRepository
    }

    async add(itemData: AddItemInput): Promise<AddItemOutput> {
        const item: Item = new Item(itemData.name, itemData.value)

        const payload = {
            name: item.getName(),
            value: item.getValue()
        }

        const itemStored = await this.itemRepository.save(payload)

        item.setId(itemStored.id)

        return {
            id: item.getId(),
            name: item.getName(),
            value: item.getValue()
        }
    }
}