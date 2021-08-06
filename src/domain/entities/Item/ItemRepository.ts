export interface ItemRepository {
    save: (params: ItemRepositoryInput) => Promise<ItemRepositoryOutput>
}

export type ItemRepositoryInput = {
    name: string
    value: number
}

export type ItemRepositoryOutput = {
    id: number
    name: string
    value: number
}