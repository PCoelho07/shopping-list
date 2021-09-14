import { List } from "@/domain/entities/list/list";
import { ListRepository } from "@/domain/entities/list/list-repository";
import { Types } from "mongoose";
import ListModel from '@/main/config/mongodb/models/list'
import ItemModel from "@/main/config/mongodb/models/item";
import { Item } from "@/domain/entities/item/item";

export class MongodbListRepository implements ListRepository {

    async findById(id: string): Promise<List> {
        let itemsList: Item[] = []
        // connect()
        const list = await ListModel.findOne({ _id: Types.ObjectId(id) }).exec()

        if (list === null) {
            // disconnect()
            throw new Error('List not found!')
        }

        const items = await ItemModel.find({ listId: list?._id }).exec()
        // disconnect()

        if (items !== null) {
            itemsList = items.map(item => {
                return new Item(item.name, item.value, item.checked, item._id)
            })
        }

        return new List(list.name, itemsList)
    }

    async save(name: string): Promise<boolean> {
        // connect()
        const list = await ListModel.create({
            name: name
        })
        // disconnect()

        return list !== null
    }

}