import { Document, Model, model, Schema } from 'mongoose'


interface ListModel extends Document {
    name: string
}

const ListSchema: Schema = new Schema({
    name: { type: String, required: true }
})

const List: Model<ListModel> = model('List', ListSchema)

export default List