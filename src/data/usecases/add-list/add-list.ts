import { List } from "@/domain/entities/list/list";
import { ListRepository } from "@/domain/entities/list/list-repository";
import { AddList as AddListInterface, AddListInput } from "@/domain/usecases/add-list";

export class AddList implements AddListInterface {

    constructor(private readonly listRepository: ListRepository) {}

    async add(params: AddListInput): Promise<boolean> {
        const list = new List(params.name)
        const result = await this.listRepository.save(list.getName())
        return result
    }
}