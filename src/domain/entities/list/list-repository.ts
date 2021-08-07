import { List } from "@/domain/entities/list/list";

export interface ListRepository {
    findById: (id: number) => Promise<List>
}