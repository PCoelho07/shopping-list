import { Item } from "@/domain/entities/item/item";

export interface ListItemsInterface {
    list: (listId: string) => Promise<Array<Object>>
}