import { Model, model, Document, Schema } from 'mongoose'

interface ItemModel extends Document {
    name: string
    value: number
}

const ItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
})

const Item: Model<ItemModel> = model('Item', ItemSchema)

export default Item