import { Connection, connect as connectMongo, connection, disconnect as disconnectMongo} from "mongoose"

let database: Connection

export const connect = () => {
    const uri: string = "mongodb://mongoadmin:secret@localhost:27017/shopping-list?authSource=admin"

    if (database) {
        return
    }

    connectMongo(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    database = connection

    database.once("open", async () => {
        console.log("Connected to database")
    })

    database.on("error", () => {
        console.log("Error connecting to database")
    })
}

export const disconnect = () => {
    if (!database) {
        return
    }

    disconnectMongo()
}