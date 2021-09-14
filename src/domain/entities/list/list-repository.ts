import { List } from "@/domain/entities/list/list";

export interface ListRepository {
    findById: (id: string) => Promise<List>
    save: (name: string) => Promise<boolean>
}