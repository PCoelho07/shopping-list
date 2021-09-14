import { Item } from "@/domain/entities/item/item";
import { User } from "@/domain/entities/user/user";

export class List {
    protected id: string
    protected owner?: User
    protected name: string
    protected items: Array<Item>

    constructor(name: string, items: Array<Item> = [], id: string = '') {
        this.name = name
        this.items = items
        this.id = id
    }

    setOwner(owner: User): void {
        this.owner = owner
    }

    hasOwner(owner: User): boolean {
        if (this.owner === undefined) {
            return false
        }

        return this.owner.getEmail() === owner.getEmail()
    }

    addItem(item: Item): void {
        const hasItem = (this.items.filter(i => item.getName() === i.getName())).length > 0

        if (hasItem) {
            throw new Error('Cannot add item. Item already exists!')
        }

        this.items.push(item)
    }

    removeItem(item: Item): void {
        const itemIndex = this.items.findIndex(e => e.getName() === item.getName())
        delete this.items[itemIndex]
    }

    hasItem(item: Item): boolean {
        const hasItem = this.items.filter(e => e.getName() === item.getName())
        return hasItem.length > 0
    }

    findItem(item: Item): Item {
        const itemFound = this.items.filter(e => e.getName() === item.getName())

        if (itemFound.length === 0) {
            throw new Error('Item not found')
        }

        return itemFound[0]
    }

    getItems(): Array<Item> {
        return this.items
    }

    getName(): string {
        return this.name
    }

    getId(): string {
        return this.id
    }
}