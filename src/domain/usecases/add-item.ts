export interface AddItem {
    add: (item: AddItem.Params) => Promise<void>
}

namespace AddItem {
    export type Params  = {
        id: number
        name: string
        value: number
    }
}