export interface UpdateItem {
    update: (id: number, params: UpdateItemInput) => Promise<UpdateItemOutput>
}

export type UpdateItemInput = {
    name?: string,
    value?: number,
}

export type UpdateItemOutput = {
    id: number
}