export class User {
    protected id: number
    protected name: string
    protected email: string

    constructor(name: string, email: string) {
        this.id = 0
        this.name = name
        this.email = email
    }

    setId(id: number): void {
        this.id = id
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }
}