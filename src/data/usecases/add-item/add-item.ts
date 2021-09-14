import { Item } from "@/domain/entities/item/item";
import { ItemRepository } from "@/domain/entities/item/item-repository";
import { List } from "@/domain/entities/list/list";
import { ListRepository } from "@/domain/entities/list/list-repository";
import { AddItem as AddItemInterface, AddItemInput, AddItemOutput } from "@/domain/usecases/add-item";

export class AddItem implements AddItemInterface {
    constructor(
        private readonly itemRepository: ItemRepository,
        private readonly listRepository: ListRepository
    ) { }

    async add(listId: string, itemData: AddItemInput): Promise<AddItemOutput> {
        const list: List = await this.listRepository.findById(listId)
        const item: Item = new Item(itemData.name, itemData.value)

        list.addItem(item)

        const payload = {
            listId,
            name: item.getName(),
            value: item.getValue(),
        }

        const itemStored = await this.itemRepository.save(payload)

        item.setId(itemStored.id)

        return {
            id: item.getId(),
            name: item.getName(),
            value: item.getValue(),
            listId: list.getId()
        }
    }
}