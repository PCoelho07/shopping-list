export interface ItemRepository {
    save: (params: ItemRepositoryInput) => Promise<ItemRepositoryOutput>
    findById: (id: string) => Promise<ItemRepositoryOutput>
    check: (id: string, checked: boolean) => Promise<boolean>
    update: (id: string, params: UpdateItemRepositoryInput) => Promise<boolean>
}

export type ItemRepositoryInput = {
    name: string
    value: number
    listId: string
}

export type ItemRepositoryOutput = {
    id: string
    name: string
    value: number
    checked: boolean
}

export type UpdateItemRepositoryInput = {
    name?: string,
    value?: number
}