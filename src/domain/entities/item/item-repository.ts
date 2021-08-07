export interface ItemRepository {
    save: (params: ItemRepositoryInput) => Promise<ItemRepositoryOutput>
    findById: (id: number) => Promise<ItemRepositoryOutput>
    check: (id: number, checked: boolean) => Promise<boolean>
    update: (id: number, params: UpdateItemRepositoryInput) => Promise<boolean>
}

export type ItemRepositoryInput = {
    name: string
    value: number
}

export type ItemRepositoryOutput = {
    id: number
    name: string
    value: number
    checked: boolean
}

export type UpdateItemRepositoryInput = {
    name?: string,
    value?: number
}