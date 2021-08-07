import { Item } from "@/domain/entities/item/item"
import { ItemRepository, ItemRepositoryInput, ItemRepositoryOutput, UpdateItemRepositoryInput } from "@/domain/entities/item/item-repository"
import { CheckUpItem } from "./check-up-item"


class LocalItemRepository implements ItemRepository {

    private item: Item

    constructor() {
        this.item = new Item('test', 10)
        this.item.setId(1)
    }

    async save(params: ItemRepositoryInput): Promise<ItemRepositoryOutput> {
        return new Promise((resolve) => {
            resolve({
                id: 1,
                name: params.name,
                value: params.value,
                checked: false
            })
        })
    }

    async findById(id: number): Promise<ItemRepositoryOutput> {
        return new Promise((resolve) => {
            resolve({
                id: this.item.getId(),
                name: this.item.getName(),
                value: this.item.getValue(),
                checked: this.item.hasChecked()
            })
        })
    }

    async check(id: number, checked: boolean): Promise<boolean> {
        return new Promise((resolve) => {
            this.item.setChecked(checked)
            resolve(true)
        })
    }

    async update(id: number, params: UpdateItemRepositoryInput): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true)
        })
    }
}

describe('CheckUpItem', () => {
    test('Should check item when call check', async () => {
        const repository: LocalItemRepository = new LocalItemRepository()
        const checkupItemUseCase = new CheckUpItem(repository)

        const checked = await checkupItemUseCase.check(1)

        expect(checked).toBe(true)

        const unchecked = await checkupItemUseCase.check(1)

        expect(unchecked).toBe(false)
    })
})