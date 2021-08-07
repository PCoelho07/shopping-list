export class Item {
    protected id: number
    protected name: string
    protected value: number
    protected checked: boolean
    protected updatedAt?: Date

    constructor(name: string, value: number) {
        if (name === '') {
            throw new Error("name cannot be blank")
        }

        if (value <= 0) {
            throw new Error("value cannot less than zero")
        }

        this.value = value
        this.name = name
        this.checked = false
        this.id = 0
    }

    hasUpdated(): void {
        this.updatedAt = new Date()
    }

    setChecked(check: boolean): void {
        this.checked = check
    }

    setId(id: number): void {
        this.id = id
    }

    hasChecked(): boolean {
        return this.checked
    }

    getUpdatedAt(): Date | undefined {
        return this.updatedAt
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