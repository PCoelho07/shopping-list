import { Item } from "@/domain/entities/item/item"
import { ItemRepository, ItemRepositoryInput, ItemRepositoryOutput, UpdateItemRepositoryInput } from "@/domain/entities/item/item-repository"
import { CheckUpItem } from "./check-up-item"


class LocalItemRepository implements ItemRepository {

    private item: Item

    constructor() {
        this.item = new Item('test', 10)
        this.item.setId('teste')
    }

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
        return new Promise((resolve) => {
            resolve({
                id: this.item.getId(),
                name: this.item.getName(),
                value: this.item.getValue(),
                checked: this.item.hasChecked()
            })
        })
    }

    async check(id: string, checked: boolean): Promise<boolean> {
        return new Promise((resolve) => {
            this.item.setChecked(checked)
            resolve(true)
        })
    }

    async update(id: string, params: UpdateItemRepositoryInput): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true)
        })
    }
}

describe('CheckUpItem', () => {
    test('Should check item when call check', async () => {
        const repository: LocalItemRepository = new LocalItemRepository()
        const checkupItemUseCase = new CheckUpItem(repository)

        const checked = await checkupItemUseCase.check('teste')

        expect(checked).toBe(true)

        const unchecked = await checkupItemUseCase.check('teste')

        expect(unchecked).toBe(false)
    })
})