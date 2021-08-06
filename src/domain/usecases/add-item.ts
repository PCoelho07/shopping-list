export interface AddItem {
    add: (item: AddItemInput) => Promise<AddItemOutput>
}

export type AddItemInput = {
    name: string
    value: number
}

export type AddItemOutput = AddItemInput & {
    id: number
}