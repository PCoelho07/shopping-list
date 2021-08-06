export class Item {
    protected id: number
    protected name: string
    protected value: number

    constructor(name: string, value: number) {
        if (name === '') {
            throw new Error("name cannot be blank")
        }

        if (value <= 0) {
            throw new Error("value cannot less than zero")
        }

        this.value = value
        this.name = name
        this.id = 0
    }

    setId(id: number): void {
        this.id = id
    }

    getName(): string {
        return this.name
    }

    getValue(): number {
        return this.value
    }

    getId(): number {
        return this.id
    }
}