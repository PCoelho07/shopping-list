export class Item {
    protected id: string
    protected name: string
    protected value: number
    protected checked: boolean
    protected updatedAt?: Date

    constructor(name: string, value: number, checked: boolean = false, id: string = '') {
        if (name === '') {
            throw new Error("name cannot be blank")
        }

        if (value <= 0) {
            throw new Error("value cannot less than zero")
        }

        this.value = value
        this.name = name
        this.checked = checked
        this.id = id
    }

    hasUpdated(): void {
        this.updatedAt = new Date()
    }

    setChecked(check: boolean): void {
        this.checked = check
    }

    setId(id: string): void {
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

    getId(): string {
        return this.id
    }

    setName(name: string): void {
        this.name = name
    }

    setValue(value: number): void {
        this.value = value
    }
}