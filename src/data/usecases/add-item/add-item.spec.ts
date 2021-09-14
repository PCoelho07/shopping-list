import { Item } from "@/domain/entities/item/item"
import { ItemRepository, ItemRepositoryInput, ItemRepositoryOutput, UpdateItemRepositoryInput } from "@/domain/entities/item/item-repository"
import { List } from "@/domain/entities/list/list"
import { ListRepository } from "@/domain/entities/list/list-repository"
import { User } from "@/domain/entities/user/user"
import { AddItem } from "./add-item"

class LocalItemRepository implements ItemRepository {
    async save(params: ItemRepositoryInput): Promise<ItemRepositoryOutput> {
        return new Promise((resolve) => {
            resolve({
                id: 'teste',
                name: params.name,
                value: params.value,
                checked: false
            })
        })
    }

    async findById(id: string): Promise<ItemRepositoryOutput> {
        return new Promise((resolve) => {})
    }

    async check(id: string, checked: boolean): Promise<boolean> {
        return new Promise((resolve) => {})
    }

    async update(id: string, params: UpdateItemRepositoryInput): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true)
        })
    }
}

class LocalListRepository implements ListRepository {
    findById(id: string): Promise<List> {
        return new Promise((resolve, reject) => {
            const list: List = new List('list-name', [new Item('test-item', 10)], 'teste')
            resolve(list)
        })
    }

    save(name: string): Promise<boolean> {
        return new Promise((resolve) => {
            resolve(true)
        })
    }
}

describe('AddItem', () => {
    test('Should return a Item with params equals to provided params', async () => {
        const repositoryInstance = new LocalItemRepository()
        const listRepositoryInstance = new LocalListRepository()
        const addItem = new AddItem(repositoryInstance, listRepositoryInstance)

        const response = await addItem.add('teste', {
            name: 'new item',
            value: 10
        })

        expect(response).toEqual({
            id: 'teste',
            name: 'new item',
            value: 10,
            listId: 'teste'
        })

    })

    test('Should not add item when the same item already exists', async () => {
        const repositoryInstance = new LocalItemRepository()
        const listRepositoryInstance = new LocalListRepository()
        const addItem = new AddItem(repositoryInstance, listRepositoryInstance)

        await expect(async () => {
            await addItem.add('teste', {
                name: 'test-item',
                value: 10
            })
        })
        .rejects
        .toThrow('Cannot add item. Item already exists!')
    })
})