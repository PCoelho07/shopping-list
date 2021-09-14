import { List } from "@/domain/entities/list/list";
import { ListRepository } from "@/domain/entities/list/list-repository";
import { resolve } from "path/posix";

class LocalListRepository implements ListRepository {
    findById(id: string): Promise<List> {
        return new Promise((resolve) => {
            resolve(new List('test'))
        })
    }

    save(name: string): Promise<boolean> {
        return new Promise((resolve) => {
            resolve(true)
        })
    }
}


describe('AddList', () => {
    test('Should add list with success', () => {

    })
})