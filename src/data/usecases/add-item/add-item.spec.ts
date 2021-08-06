import { ItemRepository, ItemRepositoryInput, ItemRepositoryOutput } from "@/domain/entities/Item/ItemRepository"
import { AddItem } from "./add-item"

class LocalItemRepository implements ItemRepository {
    async save(params: ItemRepositoryInput): Promise<ItemRepositoryOutput> {
        return new Promise((resolve) => {
            resolve({
                id: 1,
                name: params.name,
                value: params.value
            })
        })
    }
}

describe('AddItem', () => {
    test('Should return a Item with params equals to provided params', async () => {
        const repositoryInstance = new LocalItemRepository()
        const addItem = new AddItem(repositoryInstance)

        const response = await addItem.add({
            name: 'new item',
            value: 10
        })

        expect(response).toEqual({
            id: 1,
            name: 'new item',
            value: 10
        })

    })
})