import { AddItem } from "@/data/usecases/add-item/add-item";
import { CheckUpItem } from "@/data/usecases/check-up-item/check-up-item";
import { ListItem } from "@/data/usecases/list-item/list-items";
import { ItemRepository } from "@/domain/entities/item/item-repository";
import { ListRepository } from "@/domain/entities/list/list-repository";
import { AddItemInput, AddItemOutput } from "@/domain/usecases/add-item";
import { MongodbItemRepository } from "@/infrastructure/repositories/mongodb-item-repository";
import { MongodbListRepository } from "@/infrastructure/repositories/mongodb-list-repository";
import { HttpResponse } from "@/presentation/contracts/http";

export class ItemsController {
    protected itemRepository: ItemRepository
    protected listRepository: ListRepository

    constructor() {
        this.itemRepository = new MongodbItemRepository()
        this.listRepository = new MongodbListRepository()
    }

    async list(listId: string): Promise<HttpResponse<Object>> {
        const listItems = new ListItem(this.listRepository)

        const items = await listItems.list(listId)

        return {
            code: 200,
            data: {
                items
            }
        }
    }

    async check (itemId: string): Promise<HttpResponse<Object>> {
        try {
            const checkupItem = new CheckUpItem(this.itemRepository)
            const result: boolean = await checkupItem.check(itemId)

            return {
                code: 200,
                data: {
                    id: itemId,
                    checked: result
                }
            }
        } catch (error) {
            return {
                code: 500,
                data: {
                    error: error.stack
                }
            }
        }
    }

    async save(listId: string, params: AddItemInput): Promise<HttpResponse<Object>> {
        try {
            const saveItem = new AddItem(this.itemRepository, this.listRepository)
            const result: AddItemOutput = await saveItem.add(listId, params)

            return {
                code: 200,
                data: result
            }
        } catch (error) {
            return {
                code: 500,
                data: {
                    error: error.stack
                }
            }
        }
    }
}