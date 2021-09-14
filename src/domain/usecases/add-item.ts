export interface AddItem {
    add: (listId: string, item: AddItemInput) => Promise<AddItemOutput>
}

export type AddItemInput = {
    name: string
    value: number
}

export type AddItemOutput = AddItemInput & {
    id: string
    listId: string
}