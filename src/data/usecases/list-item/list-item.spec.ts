import { Item } from "@/domain/entities/item/item";
import { List } from "@/domain/entities/list/list";
import { ListRepository } from "@/domain/entities/list/list-repository";
import { ListItem } from "./list-items";

class LocalListRepository implements ListRepository {
    protected lists: List[] = []

    constructor() {
        const list = new List('test-list', [
            new Item('test-item', 10, false, 'teste')
        ])
        this.lists.push(list)
    }

    findById(id: string): Promise<List> {
        return new Promise<List>(resolve =>  {
            resolve(this.lists[0])
        })
    }

    save(name: string): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            this.lists.push(new List(name))
            resolve(true)
        })
    }
}

describe('List item use case', () => {
    const repository: ListRepository = new LocalListRepository()

    it('should show array of items', async () => {
        const useCase: ListItem = new ListItem(repository)
        const result = await useCase.list('teste')
        expect(result).toEqual([{ id: 'teste', name: 'test-item', value: 10, checked: false }])
    })
})