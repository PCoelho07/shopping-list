import { Item } from "@/domain/entities/item/item";

export interface AddList {
    add: (params: AddListInput) => Promise<boolean>
}

export type AddListInput = {
    name: string
}