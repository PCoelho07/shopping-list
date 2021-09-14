import { Item } from "@/domain/entities/item/item";
import { List } from "@/domain/entities/list/list";
import { ListRepository } from "@/domain/entities/list/list-repository";
import { ListItemsInterface } from "@/domain/usecases/list-items";

export class ListItem implements ListItemsInterface {

    constructor(
        private readonly listRepository: ListRepository
    ) {}

    async list(listId: string): Promise<Array<Object>> {
        const list: List = await this.listRepository.findById(listId)
        const items: Item[] = list.getItems()

        return items.map(item => ({
            id: item.getId(),
            name: item.getName(),
            value: item.getValue(),
            checked: item.hasChecked()
        }))
    }
}