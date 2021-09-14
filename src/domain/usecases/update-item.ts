export interface UpdateItem {
    update: (id: string, params: UpdateItemInput) => Promise<UpdateItemOutput>
}

export type UpdateItemInput = {
    name?: string,
    value?: number,
}

export type UpdateItemOutput = {
    id: string
}