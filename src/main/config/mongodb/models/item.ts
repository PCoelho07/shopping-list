import { Model, model, Document, Schema } from 'mongoose'

interface ItemModel extends Document {
    listId: string
    name: string
    value: number
    checked: boolean
}

const ItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    checked: { type: Boolean, default: false },
    listId: { type: Schema.Types.ObjectId, ref: 'List'  }
})

const Item: Model<ItemModel> = model('Item', ItemSchema)

export default Item