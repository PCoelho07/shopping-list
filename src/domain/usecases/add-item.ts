export interface AddItem {
    add: (listId: number, item: AddItemInput) => Promise<AddItemOutput>
}

export type AddItemInput = {
    name: string
    value: number
}

export type AddItemOutput = AddItemInput & {
    id: number
}