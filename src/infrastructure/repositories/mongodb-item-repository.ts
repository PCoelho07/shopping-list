import { Item } from "@/domain/entities/item/item";
import { ItemRepository, ItemRepositoryInput, ItemRepositoryOutput, UpdateItemRepositoryInput } from "@/domain/entities/item/item-repository";
import ItemModel from '@/main/config/mongodb/models/item'
import { isValidObjectId, Types } from "mongoose";

export class MongodbItemRepository implements ItemRepository {
    async save(params: ItemRepositoryInput): Promise<ItemRepositoryOutput> {
        const item = await ItemModel.create({
            name: params.name,
            value: params.value,
            listId: Types.ObjectId(params.listId)
        })

        return {
            id: item._id,
            name: item.name,
            value: item.value,
            checked: item.checked,
        }
    }

    async findById(id: string): Promise<ItemRepositoryOutput> {
        const item = await ItemModel.findOne({ _id: Types.ObjectId(id) }).exec()

        if (item === null) {
            throw new Error('Item not found!')
        }

        return {
            id: item._id,
            name: item.name,
            value: item.value,
            checked: item.checked,
        }
    }

    async check(id: string, checked: boolean): Promise<boolean> {
        const item = await ItemModel.findByIdAndUpdate(id, { checked })

        return item !== null
    }

    async update(id: string, itemParams: UpdateItemRepositoryInput): Promise<boolean> {
        let payload = {}

        if (!!itemParams.name) {
            payload = {
                name: itemParams.name
            }
        }

        if (!!itemParams.value) {
            payload = {
                ...payload,
                value: itemParams.value
            }
        }

        const item = await ItemModel.findOneAndUpdate({ _id: id }, payload)

        return item !== null
    }
}